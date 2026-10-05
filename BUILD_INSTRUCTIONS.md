# Portfolio Website — Build Instructions

I want you to work with me to build my personal portfolio website directly inside this local folder.

The website will use:

- **Astro**
- **Git**
- **GitHub**
- **GitHub Pages**
- Markdown-based project content
- Local image and PDF files
- YouTube URLs for videos

The final website must be publicly accessible by URL and free to host.

---

# 1. Your role

Act as my **technical pair programmer**.

You are allowed and expected to:

- inspect this folder;
- create folders;
- create files;
- edit existing files;
- run PowerShell-compatible terminal commands;
- install project dependencies;
- run the local development server when appropriate;
- run Astro builds;
- inspect errors;
- fix errors;
- initialize and use Git;
- inspect Git configuration;
- prepare GitHub Pages deployment;
- maintain the project structure;
- implement reusable components;
- improve the website incrementally.

Do **not** merely give me code and expect me to manually create every file.

If you have filesystem and terminal access, make the changes yourself.

Explain important decisions to me, but perform routine implementation directly.

---

# 2. Division of responsibility

Use a hybrid workflow.

## You should directly handle

- project scaffolding;
- Astro configuration;
- folder architecture;
- reusable components;
- page templates;
- CSS;
- routing;
- Markdown/content architecture;
- gallery implementation;
- YouTube embedding;
- publication support;
- responsive behavior;
- accessibility;
- Git configuration inside this project;
- GitHub Pages deployment files;
- testing;
- debugging;
- documentation.

## I should control

- my real project information;
- project descriptions;
- project titles;
- categories;
- images;
- PDFs;
- YouTube URLs;
- publication information;
- which projects are included;
- visual/design preferences;
- important GitHub/account actions when my explicit input is appropriate.

Do not invent portfolio projects or pretend that placeholder information is real.

---

# 3. Work with real content

I want to build this using my actual portfolio content.

Do NOT populate the site with multiple fake projects.

You should first build the **system and empty structure** needed to hold real projects.

When the architecture is ready for the first project, stop and tell me clearly what information/files I should add.

For example, tell me where to place:

- cover image;
- gallery images;
- project text;
- project title;
- short description;
- category;
- year;
- YouTube URL;
- GitHub URL;
- publication;
- PDF.

I will provide or add the real information.

Then continue building around that real first project.

The goal is for me to feel that I am putting my information into an already functioning system, rather than manually programming each project page.

---

# 4. Development environment

I am working on **Windows**.

My terminal is **PowerShell**.

Use PowerShell-compatible commands.

Do not assume Bash, WSL, macOS, or Linux shell syntax.

Before installation or initialization, inspect the environment.

Check relevant things such as:

```powershell
Get-Location
Get-ChildItem
node --version
npm --version
git --version
git status
git config --get user.name
git config --get user.email
```

Check whether GitHub CLI exists before trying to use it:

```powershell
gh --version
```

Do not assume `gh` is installed.

My computer is already authenticated for GitHub access, so do not start by teaching me how to generate SSH keys.

Inspect the existing setup first.

If necessary, verify GitHub SSH connectivity appropriately.

---

# 5. Do not destroy existing work

Before making substantial changes:

- inspect the current folder;
- inspect existing files;
- inspect Git status if Git exists.

Never overwrite useful existing work without understanding it.

If the folder is empty, proceed normally.

If something already exists, adapt to it.

---

# 6. Technology philosophy

Use **Astro as the primary framework**.

Prefer:

- Astro components;
- semantic HTML;
- CSS;
- small amounts of TypeScript or JavaScript.

Avoid unnecessary complexity.

Do NOT introduce the following unless there is a clear reason that you explain first:

- React;
- Vue;
- Svelte;
- Next.js;
- database;
- backend;
- CMS;
- Tailwind;
- Bootstrap;
- large UI frameworks;
- large gallery libraries.

The portfolio is primarily a **content-driven static website**.

Keep it easy for me to understand and maintain later.

---

# 7. Astro version

Use the current installed/stable Astro version and its current recommended conventions.

Do not blindly copy old Astro tutorials.

In particular, Astro's content APIs and configuration conventions may change between versions.

After Astro is installed:

1. determine the installed version;
2. use conventions appropriate for that version;
3. do not mix incompatible examples from older Astro releases;
4. if current documentation is available to you, verify uncertain framework-specific details.

Keep the resulting architecture conventional and maintainable.

---

# 8. Overall content model

The website is an **interactive library of projects**.

There are multiple subjects/categories.

Each subject contains project cards.

Conceptually:

```text
PORTFOLIO

Subject A

[ Project ]  [ Project ]  [ Project ]


Subject B

[ Project ]  [ Project ]


Subject C

[ Project ]  [ Project ]  [ Project ]
```

Projects may belong to one or more subjects/categories.

The homepage/library should eventually derive these sections automatically from project metadata.

I should NOT need to manually add a project to the homepage every time I create one.

---

# 9. Project card behavior

Each project appears as an image-based card.

On desktop:

- show the project cover image;
- hovering reveals an overlay;
- overlay can contain:
  - project title;
  - short description;
  - year;
  - category/tags where appropriate;
- clicking opens the project page.

The transition should feel clean and interactive.

However, do not make hover essential.

On touch devices:

- important information must remain available;
- cards must be usable without hover;
- clicking/tapping must work naturally.

Use real links rather than inaccessible clickable `<div>` elements.

---

# 10. Project pages

Each project should automatically receive its own page.

A project page should be capable of containing:

- title;
- short summary;
- long Markdown text;
- cover image;
- image gallery;
- optional YouTube video;
- optional publication;
- optional PDF;
- optional GitHub repository;
- optional external website;
- optional year;
- one or more categories;
- optional tags.

Only render sections that actually contain content.

For example:

- no YouTube URL → no video section;
- no publication → no publication section;
- no GitHub URL → no GitHub button;
- no PDF → no PDF button.

Never show empty sections.

---

# 11. Separate CONTENT from CODE

This is a fundamental architectural requirement.

Website logic belongs in reusable components and templates.

Project-specific information belongs in project content files and project asset folders.

I want something conceptually similar to:

```text
src/
├── components/
├── layouts/
├── pages/
└── content/
    └── projects/

public/
└── projects/
    ├── project-one/
    ├── project-two/
    └── ...
```

Adapt this structure when necessary to the installed Astro version, but preserve the principle.

---

# 12. Project Markdown

Use Astro's content system/content collections or the current equivalent recommended by the installed Astro version.

Each project should contain structured metadata plus Markdown body text.

The metadata should support something conceptually similar to:

```yaml
---
title: Project Title

summary: >
  A short description used on the project card and in metadata.

year: 2026

categories:
  - Category Name

tags:
  - Optional Tag

cover: /projects/project-slug/cover.webp

gallery:
  - /projects/project-slug/image-01.webp
  - /projects/project-slug/image-02.webp

youtube: https://www.youtube.com/watch?v=...

github: https://github.com/...

externalUrl: https://...

publication:
  title: Publication title
  authors:
    - Author One
    - Author Two
  venue: Publication venue
  year: 2026
  doi: https://doi.org/...
  url: https://...
  pdf: /projects/project-slug/publication.pdf
---

Long-form project description goes here in Markdown.

It can contain paragraphs, headings, lists, links, and other normal Markdown content.
```

This is a conceptual schema, not a requirement to use these exact property names.

Choose clear naming and validate the schema.

Fields that are not universally needed must be optional.

---

# 13. Asset organization

Keep project images and PDFs locally in this repository.

Use a predictable folder for each project, for example:

```text
public/
└── projects/
    └── project-slug/
        ├── cover.webp
        ├── image-01.webp
        ├── image-02.webp
        ├── image-03.webp
        └── publication.pdf
```

I should be able to add images simply by placing files in the correct project folder and referencing them from the project content.

Do not store large video files in Git.

---

# 14. Videos

Almost every project may eventually contain a video.

Videos should normally be hosted on **YouTube**.

The project content should contain the YouTube URL.

Create a reusable component that:

- accepts normal YouTube URLs;
- handles common YouTube URL formats;
- extracts the required video identifier;
- creates a responsive embedded player;
- does not require iframe markup inside every project Markdown file.

If a privacy-enhanced YouTube embed is practical, prefer it.

Keep the implementation understandable.

---

# 15. Gallery

Each project may contain multiple images.

Build a reusable gallery.

The initial gallery should be functional rather than overly elaborate.

It should support:

- responsive layouts;
- different image aspect ratios;
- opening an image in a larger view/lightbox;
- closing the enlarged image;
- keyboard interaction;
- mobile interaction;
- sensible image alt text;
- visible focus states.

Prefer a lightweight implementation over adding a large dependency.

Later we can redesign its visual behavior.

---

# 16. Publications

Some projects may contain academic publications.

Support optional metadata such as:

- publication title;
- authors;
- venue;
- year;
- DOI;
- publication URL;
- local PDF.

Create a reusable publication component or section.

Projects without publications must require no extra configuration.

---

# 17. GitHub links

Some projects may have their own GitHub repositories.

Support an optional GitHub URL in project metadata.

Do not assume every project has one.

---

# 18. Homepage categories

Do not hard-code the same category information in multiple places.

The project library should derive available categories from project content.

If a project contains:

```yaml
categories:
  - Category A
  - Category B
```

the architecture should make it possible for that project to appear appropriately in both categories.

Initially, simple category sections are enough.

Later I may want:

- filters;
- search;
- sorting;
- animated filtering.

Do not implement all of these now, but avoid architectural choices that make them difficult later.

---

# 19. Initial visual design

Initially, create a **real usable website**, not a completely unstyled technical prototype.

However, do not spend excessive time polishing a visual identity yet.

The first design should be:

- clean;
- professional;
- neutral;
- readable;
- responsive;
- visually coherent;
- good enough that I can send someone the URL.

Use:

- good typography;
- sensible spacing;
- responsive grid;
- restrained hover transitions;
- clear navigation;
- appropriate maximum content widths;
- accessible contrast;
- clear focus styles.

Use CSS custom properties for reusable design values, for example:

```css
:root {
  --background: ...;
  --foreground: ...;
  --muted: ...;
  --accent: ...;

  --max-width: ...;
  --radius: ...;

  --space-xs: ...;
  --space-sm: ...;
  --space-md: ...;
  --space-lg: ...;
}
```

We will intentionally redesign and polish the visual identity later.

---

# 20. Responsive behavior

The first deployed website must already work on:

- desktop;
- laptop;
- tablet;
- phone.

Check multiple viewport sizes.

Do not postpone all responsive behavior until the design phase.

---

# 21. Accessibility

Use semantic HTML and reasonable accessibility from the beginning.

At minimum:

- keyboard-accessible links;
- visible keyboard focus;
- proper headings;
- appropriate alt text;
- functional touch interaction;
- gallery controls that are not mouse-only;
- semantic navigation;
- reduced-motion consideration for animations.

Accessibility should be part of the structure, not an afterthought.

---

# 22. Priority: get a real public URL early

I want to see and use an actual deployed website as early as reasonably possible.

Therefore DO NOT wait until every advanced feature is complete before deploying.

The preferred workflow is approximately:

```text
Astro works locally
        ↓
basic portfolio structure
        ↓
first REAL project
        ↓
homepage
        ↓
basic project page
        ↓
Git + GitHub
        ↓
GitHub Pages
        ↓
PUBLIC URL
        ↓
continue developing
        ↓
gallery / video / publication improvements
        ↓
design refinement
```

Once the minimum useful site exists, deploy it.

After that, continue developing locally and push improvements incrementally.

This is important.

I want an existing live portfolio that gradually gets better, rather than waiting for a perfect final website.

---

# 23. Git workflow

Use Git throughout the project.

Before Git operations, inspect the repository state.

Use commands such as:

```powershell
git status
git diff
git log --oneline
git remote -v
```

when relevant.

Make meaningful commits.

Examples:

```text
Initial Astro setup

Add project content architecture

Add portfolio library

Add project page template

Configure GitHub Pages deployment

Add project gallery

Add YouTube support
```

Avoid meaningless commits for every tiny edit.

Before potentially important pushes, show me or summarize what will be committed.

---

# 24. GitHub repository

My computer already has GitHub authentication configured.

When we reach GitHub:

1. inspect existing Git configuration;
2. inspect existing remotes;
3. check whether GitHub CLI exists;
4. determine the easiest appropriate repository-creation workflow.

Do not create accounts or SSH keys.

Creating the GitHub repository is an important account-level action.

Guide me through it and involve me when appropriate.

If GitHub CLI is installed and repository creation can be done cleanly from the terminal, explain the command before using it.

If using the GitHub website is more appropriate, give me the minimal required steps.

Then connect the local repository and verify the remote.

---

# 25. GitHub Pages

Host the portfolio using **GitHub Pages**.

Use the current recommended Astro + GitHub Pages deployment architecture.

Automatic deployment should occur from the repository using GitHub Actions or the current recommended equivalent.

Do NOT guess the final path.

Determine whether we are using:

```text
https://USERNAME.github.io/
```

or:

```text
https://USERNAME.github.io/REPOSITORY/
```

Then configure Astro correctly.

Pay attention to:

- `site`;
- `base`;
- asset paths;
- internal links;
- images;
- PDFs;
- JavaScript;
- project routes.

A site that works at `localhost` but breaks on GitHub Pages is not complete.

---

# 26. Production verification

After initial deployment, actually verify the website.

Check at minimum:

- homepage loads;
- CSS loads;
- cover image loads;
- project card works;
- project page works;
- navigation works;
- direct project URL works;
- browser refresh on relevant routes behaves correctly;
- mobile layout is reasonable.

Once implemented, also verify:

- gallery;
- YouTube;
- PDFs;
- publication links;
- external links.

If deployment fails, diagnose the deployment rather than telling me simply to try again.

---

# 27. SEO later, but before final polish

After the basic public website is operational, add sensible website metadata.

Eventually support:

- page title;
- project-specific titles;
- description;
- canonical URL;
- Open Graph metadata;
- social preview image;
- favicon;
- sitemap if appropriate.

Project pages should use their project's real information.

Do not make SEO configuration block the first deployment.

---

# 28. README

Maintain a useful `README.md`.

The README should eventually explain:

- what technologies the website uses;
- how to install dependencies;
- how to start the local development server;
- how to build the site;
- how GitHub Pages deployment works;
- important folder structure.

Most importantly, include a clear section:

# Adding a New Project

It should eventually be as simple as:

```text
1. Create the project's asset folder.
2. Add images/PDFs.
3. Create the project content file.
4. Add title, summary, categories and optional metadata.
5. Write the project text in Markdown.
6. Preview locally.
7. Commit.
8. Push.
9. GitHub automatically updates the public portfolio.
```

Document the exact implementation we create rather than generic Astro instructions.

---

# 29. How to communicate with me

Do not narrate every trivial file operation.

Before a meaningful group of changes, briefly tell me what you are about to implement.

For example:

> I have the Astro skeleton working. Next I am creating the project content model and the reusable project-card/page structure. After that I will ask you for the first real project's files and metadata.

Then do the work.

After a meaningful implementation step, summarize:

- what changed;
- important files;
- how I can see/test it;
- whether you need anything from me.

When you need real portfolio content, ask me for it instead of inventing it.

---

# 30. When you need me

Ask for my input when required for things such as:

- choosing the local portfolio folder if unclear;
- providing the first project's title;
- providing its short description;
- choosing its category;
- providing images;
- providing project text;
- providing YouTube URL;
- providing publication information;
- choosing GitHub repository name;
- performing an account-level action;
- making subjective visual-design decisions.

Do not ask me questions that you can answer by inspecting the project yourself.

Do not repeatedly ask for information I have already supplied.

---

# 31. Error handling

When something fails:

1. read the error;
2. determine the likely cause;
3. inspect relevant files/configuration;
4. make the smallest reasonable correction;
5. test again.

Do not respond to every error by reinstalling or rebuilding the project from scratch.

Do not remove working functionality just to bypass an error.

---

# 32. Keep the architecture understandable

Avoid AI-generated overengineering.

Do not create:

- dozens of tiny wrapper components;
- unnecessary utility layers;
- unnecessary state-management systems;
- generic abstraction frameworks;
- premature optimization;
- enormous configuration files;
- dependencies for things that require a few lines of clean code.

A technically experienced person should be able to open this repository months later and understand how it works.

---

# 33. Desired long-term workflow

The final system should make this normal:

```text
I decide to add a project
        ↓
create project asset folder
        ↓
add my images
        ↓
create/edit Markdown project file
        ↓
write the project text
        ↓
add optional links/video/publication
        ↓
preview locally
        ↓
git commit
        ↓
git push
        ↓
public website automatically updates
```

I should NOT have to manually:

- create a new HTML page;
- modify the homepage;
- modify routing;
- modify the gallery component;
- edit JavaScript;
- register the project in several different configuration files.

---

# 34. Build order

Use this as the default implementation order.

## Phase 1 — Inspect

Inspect:

- current folder;
- Node;
- npm;
- Git;
- existing repository state;
- relevant configuration.

Do not modify anything until you understand what already exists.

---

## Phase 2 — Create Astro project

Create/configure the Astro project in this folder.

Run it locally.

Verify the development server works.

Explain only the important generated files.

---

## Phase 3 — Basic architecture

Create:

- core layout;
- navigation;
- basic CSS;
- project content architecture;
- project schema;
- reusable project card;
- reusable project page structure.

Do not invent real project data.

---

## Phase 4 — First real project

At this point, tell me exactly what real information/files you need from me.

Give me the required folder location.

I will add/provide the project's real data.

Use this first real project to verify the architecture.

---

## Phase 5 — First usable portfolio

Implement enough that I can already browse:

```text
Homepage/library
     ↓
real project card
     ↓
real project page
```

Make this version clean and responsive enough to show someone.

---

## Phase 6 — GitHub + first deployment

Do NOT wait for the advanced features.

Set up:

- Git;
- meaningful initial commits;
- GitHub repository;
- remote;
- push;
- GitHub Pages;
- automatic deployment.

Get the first public URL working.

Show me the URL when available.

Verify the deployed site.

This is an important milestone.

---

## Phase 7 — Gallery

Add the reusable image gallery and large image/lightbox behavior.

Test it locally and in production.

---

## Phase 8 — YouTube

Add reusable YouTube support.

Use the real project's URL if I have provided one.

---

## Phase 9 — Publications and optional resources

Add support for:

- publication;
- PDF;
- GitHub;
- external URL.

Only render what exists.

---

## Phase 10 — Categories

Make project categories automatically drive the library organization.

---

## Phase 11 — Accessibility/responsive pass

Check the complete basic system on different viewport sizes and with keyboard interaction.

---

## Phase 12 — README and maintenance workflow

Document the real project architecture, particularly how to add a project.

---

## Phase 13 — Visual design refinement

Only after we have a functioning, deployed, maintainable system should we substantially redesign:

- colors;
- typography;
- card proportions;
- animations;
- gallery style;
- spacing;
- navigation;
- visual identity;
- unusual interactive behavior.

At this stage, work with me interactively on the visual design.

Do not replace the underlying working content architecture merely to achieve a new visual style.

---

# 35. Start now

Begin with **Phase 1 — Inspect**.

You are operating inside the intended portfolio directory.

Inspect the folder and development environment yourself using PowerShell-compatible commands.

Then report briefly:

- what is currently in the folder;
- Node/npm status;
- Git status;
- whether this is already a Git repository;
- whether GitHub CLI is available;
- anything that must be resolved before creating the Astro project.

If the environment is suitable, proceed directly into **Phase 2** and create the Astro project.

Stop and ask me only if you encounter a decision that genuinely requires my input.