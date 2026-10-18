// Shared helpers for reading projects. Pages use these instead of calling
// getCollection directly, so sorting and draft filtering live in one place.
import { getCollection, type CollectionEntry } from 'astro:content';
import { CHAPTERS } from '../site.config';

export type Project = CollectionEntry<'projects'>;

/** All published projects, newest first (projects without a date go last). */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  const key = (p: Project) => p.data.dateEnd ?? p.data.date ?? '';
  return projects.sort((a, b) => key(b).localeCompare(key(a)) || a.data.title.localeCompare(b.data.title));
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * Human-readable project date: "January 2026", "November – December 2024",
 * "November 2024 – January 2025", or just "2024". Undefined if the project has no date.
 */
export function formatProjectDate({ date, dateEnd }: { date?: string; dateEnd?: string }): string | undefined {
  if (!date) return undefined;
  const parse = (d: string) => ({ year: d.slice(0, 4), month: d.length > 4 ? MONTHS[Number(d.slice(5, 7)) - 1] : undefined });
  const start = parse(date);
  const one = (d: ReturnType<typeof parse>) => [d.month, d.year].filter(Boolean).join(' ');
  if (!dateEnd || dateEnd === date) return one(start);
  const end = parse(dateEnd);
  if (start.year === end.year && start.month && end.month) return `${start.month} – ${end.month} ${end.year}`;
  return `${one(start)} – ${one(end)}`;
}

/** Short year label for lists: "2021", "2021–22", or "" if the project has no date. */
export function projectYear({ date, dateEnd }: { date?: string; dateEnd?: string }): string {
  if (!date) return '';
  const start = date.slice(0, 4);
  const end = dateEnd?.slice(0, 4);
  return end && end !== start ? `${start}–${end.slice(2)}` : start;
}

/**
 * Groups projects by category, derived from each project's `categories` list.
 * A project with several categories appears in each of them.
 * Categories are ordered by number of projects, then alphabetically.
 */
export function groupByCategory(projects: Project[]) {
  const groups = new Map<string, Project[]>();
  for (const project of projects) {
    for (const category of project.data.categories) {
      if (!groups.has(category)) groups.set(category, []);
      groups.get(category)!.push(project);
    }
  }
  return [...groups.entries()]
    .map(([name, projects]) => ({ name, slug: slugify(name), projects }))
    .sort((a, b) => b.projects.length - a.projects.length || a.name.localeCompare(b.name));
}

const ACCENT = 'var(--cyan)';

const byOrder = (a: Project, b: Project) => (a.data.order ?? 1e9) - (b.data.order ?? 1e9);

/** The selected projects, in their `order`. Input must be newest first (as from getProjects). */
export function getSelected(projects: Project[]): Project[] {
  return projects.filter((p) => p.data.featured).sort(byOrder);
}

/**
 * The archive: every project that is not selected, grouped into the chapters of
 * src/site.config.ts. Inside a chapter projects follow `order`, then newest first.
 * Projects without a chapter land in a last "More projects" group.
 */
export function groupByChapter(projects: Project[]) {
  const rest = projects.filter((p) => !p.data.featured);
  const groups: { id: string; title: string; color: string; blurb: string; projects: Project[] }[] = CHAPTERS.map((chapter) => ({
    ...chapter,
    projects: rest.filter((p) => p.data.chapter === chapter.id).sort(byOrder),
  }));
  const loose = rest.filter((p) => !p.data.chapter);
  if (loose.length) groups.push({ id: 'more', title: 'More projects', color: ACCENT, blurb: '', projects: loose });
  return groups.filter((g) => g.projects.length > 0);
}

/** The project's accent colour: the colour of its archive chapter. */
export function projectColor(project: Project): string {
  return CHAPTERS.find((c) => c.id === project.data.chapter)?.color ?? ACCENT;
}

/** Up to two initials, shown in place of a missing cover image. */
export function initials(title: string): string {
  const words = title.replace(/[^\p{L}\p{N} ]/gu, ' ').split(' ').filter((w) => w.length > 2 || /\d/.test(w));
  return words.slice(0, 2).map((w) => w[0].toUpperCase()).join('') || '··';
}

/** What the quick-view pop-up needs to show a project (see ProjectPopup.astro). */
export function popupData(project: Project) {
  const { title, summary, short, cover, chapter, categories, mechanics, human } = project.data;
  return {
    slug: project.id,
    title,
    year: projectYear(project.data),
    label: (CHAPTERS.find((c) => c.id === chapter)?.title ?? categories.join(' · ')).toUpperCase(),
    color: projectColor(project),
    initials: initials(title),
    short: short ?? summary,
    url: projectUrl(project),
    image: cover && withBase(cover),
    mechanics,
    human,
  };
}

export type PopupProject = ReturnType<typeof popupData>;

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-|-$/g, '');
}

/** URL of a project's page. */
export function projectUrl(project: Project): string {
  return withBase(`/projects/${project.id}/`);
}

/**
 * Prefixes a root-relative path with the site's base path, so links and files
 * keep working when the site is hosted in a sub-folder (e.g. GitHub Pages at
 * username.github.io/repository/). External URLs are returned unchanged.
 */
export function withBase(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + path;
}
