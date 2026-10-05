// Shared helpers for reading projects. Pages use these instead of calling
// getCollection directly, so sorting and draft filtering live in one place.
import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** All published projects, newest first (projects without a year go last). */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  return projects.sort(
    (a, b) =>
      (b.data.year ?? -Infinity) - (a.data.year ?? -Infinity) ||
      a.data.title.localeCompare(b.data.title),
  );
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
