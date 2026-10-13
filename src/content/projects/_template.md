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
date: '2026-03' # YYYY or YYYY-MM
dateEnd: '2026-05' # optional, for projects that ran over several months
tags:
  - Tag
collaborators: # shown as "In collaboration with …"
  - Partner Name

# Images live in public/projects/my-project/ and are referenced from "/projects/..."
cover: /projects/my-project/cover.webp
coverAlt: Describe what the cover image shows

gallery:
  - /projects/my-project/image-01.webp # just a path also works
  - src: /projects/my-project/image-02.webp
    alt: Describe the image (for screen readers)
    caption: One or two sentences shown under the image.
    keywords: [Keyword, Another, Third] # shown when hovering the image
  - src: /projects/my-project/clip.mp4 # short silent loop (keep under ~5 MB)
    poster: /projects/my-project/clip-poster.webp # still frame shown before it plays
    alt: Describe the video
    caption: Videos can sit in the gallery next to images.
    keywords: [Video art]

youtube: https://www.youtube.com/watch?v=VIDEO_ID
github: https://github.com/username/repository
website: https://example.com
pdf: /projects/my-project/document.pdf
links: # any other buttons
  - label: Artist on Instagram
    url: https://www.instagram.com/username/

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

# Cards, archive chapter, the two lenses and the body map.
featured: false # true makes it a selected project on the homepage (and keeps it out of the archive)
short: One line for cards and the quick-view pop-up. # the summary is used if missing
chapter: touch # archive chapter: touch, signals, motion, immersive, assistive, play, research or art
order: 1 # position inside the chapter (or among the selected projects); lower comes first
tools: [Arduino, 3D printing] # chips on the homepage card; the first tags are used if missing
mechanics: What was built - the mechanism, the actuation, the control.
human: What it does for the person who touches it.
body: # "Where it meets the body" on the project page
  # On the body: hair, brain, eyes, ear, mouth, chest, heart, belly, seat, forearm, wrist, lhand,
  # rhand, tip (fingertip), legs, feet. The whole body: whole. Outside it: front, beside, above,
  # ground, away.
  - at: forearm
    dir: in # in = body to machine (pink), out = machine to body (cyan)
    label: Muscle signals from the forearm
  - at: tip
    dir: out
    label: Skin stretch on the fingertip

draft: false # true hides the project from the site
---

Write the project description here in Markdown.

## A heading

Paragraphs, **bold**, _italic_, [links](https://example.com), lists and images
(`![Alt text](/projects/my-project/diagram.webp)`) all work.
