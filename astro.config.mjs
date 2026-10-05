// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

// Where the site is published. Set once the GitHub repository exists:
//   repository "USERNAME.github.io" → SITE = 'https://USERNAME.github.io', BASE = '/'
//   any other repository name     → SITE = 'https://USERNAME.github.io', BASE = '/REPOSITORY'
const SITE = undefined;
const BASE = '/';

// Root-relative links and images written inside Markdown text (e.g.
// ![](/projects/my-project/photo.webp)) get the BASE prefix, so they also work
// when the site lives in a sub-folder.
const prefixBaseInMarkdown = {
  name: 'prefix-base',
  element: {
    filter: ['a', 'img'],
    /** @param {any} node @param {any} ctx */
    visit(node, ctx) {
      const base = BASE.replace(/\/$/, '');
      const attribute = node.tagName === 'img' ? 'src' : 'href';
      const value = node.properties?.[attribute];
      if (base && typeof value === 'string' && value.startsWith('/') && !value.startsWith('//')) {
        ctx.setProperty(node, attribute, base + value);
      }
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  markdown: {
    processor: satteri({ hastPlugins: [prefixBaseInMarkdown] }),
  },
});
