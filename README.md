# Portfolio

**Live site: https://elisheva-shiri.github.io/**

A personal portfolio site: a filterable index of projects, where each project gets its own page with optional gallery, video, publication, PDF and links.

- **[Astro 7](https://astro.build)**: static site, plain Astro components and CSS (no UI framework)
- **Markdown** content collections: one file per project
- **GitHub Pages**: deployed automatically by GitHub Actions on every push to `main`

## Commands

Requires Node.js 24 (see `.nvmrc`; with nvm-windows: `nvm use 24.21.0`).

| Command           | What it does                                     |
| ----------------- | ------------------------------------------------ |
| `npm install`     | Install dependencies (once, after cloning)       |
| `npm run dev`     | Local preview at http://localhost:4321 with live reload |
| `npm run build`   | Build the production site into `dist/`           |
| `npm run preview` | Serve the built `dist/` locally                  |

## Adding a New Project

1. **Create the asset folder** `public/projects/<project-slug>/` (lowercase, hyphens, e.g. `public/projects/solar-car/`).
2. **Add images/PDFs** to that folder, e.g. `cover.webp`, `image-01.webp`, `paper.pdf`.
3. **Create the content file** by copying `src/content/projects/_template.md` to `src/content/projects/<project-slug>.md`.
4. **Fill in** `title`, `summary`, `categories` (required), plus any optional fields. Delete the optional fields you don't need.
5. **Write the project text** in Markdown below the closing `---`.
6. **Preview locally** with `npm run dev`.
7. **Commit**: `git add -A` then `git commit -m "Add <project> project"`.
8. **Push**: `git push`.
9. GitHub automatically rebuilds and updates the public site (takes about 1–2 minutes).

You never edit the homepage, routing or components to add a project. The file name becomes the URL (`/projects/<project-slug>/`), and the homepage filters come from each project's `categories`.

### Project fields

| Field         | Required | Notes |
| ------------- | -------- | ----- |
| `title`       | yes      | |
| `summary`     | yes      | 1–2 sentences: card text, page intro, search/social description |
| `categories`  | yes      | List. Each category becomes a filter chip in the homepage work section |
| `featured`    | no       | `true` makes it one of the selected projects: first on the homepage, and left out of the archive page |
| `short`       | no       | One line for cards and the quick-view pop-up (the summary is used if missing) |
| `chapter`     | no       | Archive chapter: `touch`, `signals`, `motion`, `immersive`, `assistive`, `play`, `research` or `art` (defined in `src/site.config.ts`) |
| `order`       | no       | Position inside the chapter, or among the selected projects. Lower comes first |
| `tools`       | no       | List of chips on the homepage card (the first tags are used if missing) |
| `mechanics`, `human` | no | The two lenses: what was built, and what it does for the person. With both, the card shows them and the Mechanics / Human toggle applies |
| `body`        | no       | "Where it meets the body": list of `{ at, dir, label }`. `at` is a place on the body (`hair`, `brain`, `eyes`, `ear`, `mouth`, `chest`, `heart`, `belly`, `seat`, `forearm`, `wrist`, `lhand`, `rhand`, `tip`, `legs`, `feet`), the whole body (`whole`), or a place outside it (`front`, `beside`, `above`, `ground`, `away`); `dir` is `in` (body → machine) or `out` (machine → body) |
| `date`        | no       | `'2024'` or `'2024-11'` (in quotes). Shown as "November 2024"; projects are sorted newest first |
| `dateEnd`     | no       | End of a project that ran over several months, e.g. `'2025-01'` → "November 2024 – January 2025" |
| `tags`        | no       | List, shown as "Tools & topics" in the project's side panel |
| `collaborators` | no     | List of names, shown under "With" in the project's side panel |
| `cover`       | no       | `/projects/<slug>/cover.webp`. Card image, page hero and social preview |
| `coverAlt`    | no       | Description of the cover image for screen readers |
| `gallery`     | no       | List of image/video paths, or `{ src, alt, caption, keywords, poster, credit }` entries. `credit` names the source of third-party material in the image. `caption` (1–2 sentences) shows under the item; `keywords` appear on hover (always visible on touch screens). `.mp4`/`.webm` files play as silent loops; `poster` is their still frame |
| `immersive`   | no       | `true` shows the gallery as a full-screen walk, one image at a time, instead of a grid. A gallery item's `group` starts a new series with a title screen (see `photography.md`) |
| `youtube`     | no       | Any normal YouTube link (`watch?v=`, `youtu.be/`, `shorts/`, `embed/`, `live/`) |
| `github`      | no       | Repository URL → "View on GitHub" button |
| `website`     | no       | External URL → "Visit website" button |
| `pdf`         | no       | Local PDF → "Download PDF" button |
| `links`       | no       | Extra buttons: list of `{ label, url }` (e.g. an artist's Instagram) |
| `publication` | no       | `title` (required), `authors`, `venue`, `year`, `doi`, `url`, `pdf` |
| `draft`       | no       | `true` hides the project from the site |

Sections only appear when they have content: no `youtube`, no video section, and so on.

**Validation:** the build stops with a clear message if a required field is missing, a URL is malformed, a YouTube link can't be recognised, or a referenced image/PDF doesn't exist in `public/`.

**Paths:** always write local files as `/projects/<slug>/file.ext` (starting with `/`, without `public`). This also works inside the Markdown text, e.g. `![Diagram](/projects/solar-car/diagram.webp)`. The site's sub-folder on GitHub Pages is added automatically.

**Private files:** anything inside a folder named `_private/` (e.g. `public/projects/<slug>/_private/full-presentation.pptx`) is ignored by Git, so it stays on your computer and is never published. The repository is public, so keep full originals you don't want to share there.

**Images:** prefer `.webp` or `.jpg`, about 2000px on the long side and under ~500 KB each. Large files slow the site down. Don't put video files in the repository; use YouTube.

**Videos:** short silent loops (video art, a few seconds, under ~5 MB) can go straight into the gallery as `.mp4`. Anything longer, or with sound, should go on YouTube (Public or Unlisted), with the link pasted into `youtube`. Embeds use YouTube's privacy-enhanced `youtube-nocookie.com` domain.

## How it's organised

```text
src/
├── content.config.ts        Project schema (fields + validation)
├── content/projects/        One Markdown file per project (_template.md is ignored)
├── site.config.ts           Site name, role, intro, links, About text, "What I bring", archive chapters, body-map points
├── lib/
│   ├── projects.ts          Loading/sorting projects, grouping by category and chapter, base-path helper
│   └── youtube.ts           Extracts the video ID from YouTube URLs
├── components/
│   ├── Lab.astro            Homepage lab: the interactive robot hand and headset view (SVG)
│   ├── ProjectPopup.astro   Quick-view pop-up: cover, the two lenses, one button to the full project page
│   ├── PhotoWalk.astro      Immersive gallery: a full-screen walk through a project's images
│   ├── BodyMap.astro        "Where it meets the body" figure on project pages
│   ├── Gallery.astro        Image/video grid with captions, hover keywords and a lightbox
│   ├── YouTube.astro        Responsive privacy-enhanced embed
│   └── Publication.astro    Citation block with PDF / URL / DOI links
├── layouts/BaseLayout.astro Page shell: <head> metadata, navigation, footer
├── pages/
│   ├── index.astro          Homepage: headline, lab, What I bring, selected work, About & contact
│   ├── projects/index.astro Archive: every other project, in chapters
│   ├── projects/[id].astro  Project page: cover, body map, story, gallery, next project
│   └── 404.astro
└── styles/global.css        Design tokens (colours, spacing, widths) and base styles
public/projects/<slug>/      Images and PDFs for each project
.github/workflows/deploy.yml GitHub Pages deployment
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site with the official [`withastro/action`](https://github.com/withastro/action) and publishes `dist/` to GitHub Pages. Progress and errors are visible in the repository's **Actions** tab.

The public address is set by `SITE` and `BASE` at the top of `astro.config.mjs`:

- repository named `USERNAME.github.io` → `https://USERNAME.github.io/` (`BASE = '/'`)
- any other repository name → `https://USERNAME.github.io/REPOSITORY/` (`BASE = '/REPOSITORY'`)

All internal links and file paths go through `withBase()` (and a small Markdown plugin in `astro.config.mjs`), so changing `BASE` is the only step needed when moving the site.
