---
# Copy this file to create a project, e.g. src/content/projects/my-project.md
# The file name becomes the page URL: /projects/my-project/
# Files starting with "_" are ignored, so this template never appears on the site.
# Lines starting with "#" are comments. Delete the optional fields you don't need.

# ── Required ──────────────────────────────────────────────
title: Project title
summary: >
  One or two sentences. Shown on the project card and at the top of the page.
categories:
  - Category name # the homepage sections are built from these

# ── Optional ──────────────────────────────────────────────
year: 2026
tags:
  - Tag

# Images live in public/projects/my-project/ and are referenced from "/projects/..."
cover: /projects/my-project/cover.webp
coverAlt: Describe what the cover image shows

gallery:
  - /projects/my-project/image-01.webp
  - src: /projects/my-project/image-02.webp
    alt: Describe the image
    caption: Optional caption shown under the image

youtube: https://www.youtube.com/watch?v=VIDEO_ID
github: https://github.com/username/repository
website: https://example.com
pdf: /projects/my-project/document.pdf

publication:
  title: Publication title
  authors:
    - Author One
    - Author Two
  venue: Journal or conference
  year: 2026
  doi: 10.1234/example # or a full https://doi.org/... link
  url: https://example.com/paper
  pdf: /projects/my-project/paper.pdf

draft: false # true hides the project from the site
---

Write the project description here in Markdown.

## A heading

Paragraphs, **bold**, _italic_, [links](https://example.com), lists and images
(`![Alt text](/projects/my-project/diagram.webp)`) all work.
