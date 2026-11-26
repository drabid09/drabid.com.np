// Checks the built page for the mistakes that are easy to ship by accident.
// Run after a build:  npm run build && npm run check
import { readFileSync, existsSync } from 'node:fs';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const problems = [];
const note = (ok, message) => {
  if (!ok) problems.push(message);
};

// One h1, and headings never skip a level.
const headings = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
note(headings.filter((h) => h === 1).length === 1, 'The page must have exactly one h1.');
headings.reduce((prev, h) => {
  note(h <= prev + 1, `Heading level jumps from h${prev} to h${h}.`);
  return h;
}, 0);

// Every in-page link points at something that exists.
const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) {
  note(ids.has(target), `Link to #${target} has no matching id.`);
}
const idList = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
note(idList.length === ids.size, 'Duplicate id attributes found.');

// Images need alt text and dimensions.
for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
  note(/\salt="/.test(tag), `Image without alt text: ${tag.slice(0, 80)}`);
  note(/\swidth="/.test(tag) && /\sheight="/.test(tag), `Image without width and height: ${tag.slice(0, 80)}`);
  const sources = [tag.match(/\ssrc="([^"]+)"/)?.[1], ...(tag.match(/\ssrcset="([^"]+)"/)?.[1] ?? '').split(',').map((part) => part.trim().split(/\s+/)[0])];
  for (const src of sources.filter(Boolean)) {
    note(existsSync(new URL(`../dist${src}`, import.meta.url)), `Image file missing from the build: ${src}`);
  }
}

// External links are https and do not leak the opener.
for (const [tag, href] of html.matchAll(/<a\b[^>]*href="(https?:[^"]+)"[^>]*>/g)) {
  note(href.startsWith('https://'), `Insecure link: ${href}`);
  note(/rel="[^"]*noopener/.test(tag), `External link without rel="noopener": ${href}`);
}

// The basics search engines and link previews read.
for (const needle of [
  '<title>',
  'name="description"',
  'rel="canonical"',
  'property="og:image"',
  'application/ld+json',
  'name="viewport"',
  'lang="en"',
]) {
  note(html.includes(needle), `Missing from <head>: ${needle}`);
}
try {
  JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
} catch {
  problems.push('Structured data is not valid JSON.');
}

// Files the page and the host depend on.
for (const file of ['CNAME', 'favicon.svg', 'og.png', 'apple-touch-icon.png', 'robots.txt', 'sitemap.xml', 'fonts/inter-latin-var.woff2']) {
  note(existsSync(new URL(`../dist/${file}`, import.meta.url)), `Missing from the build: ${file}`);
}
note(readFileSync(new URL('../dist/CNAME', import.meta.url), 'utf8').trim() === 'drabid.com.np', 'CNAME must contain drabid.com.np.');

// Nothing unfinished.
note(!/lorem ipsum|TODO|FIXME|undefined|\[object Object\]/i.test(html.replace(/<script[\s\S]*?<\/script>/g, '')), 'Placeholder or broken text found in the page.');

const kb = (Buffer.byteLength(html) / 1024).toFixed(1);
if (problems.length) {
  console.error(`✗ ${problems.length} problem(s):\n` + problems.map((p) => '  - ' + p).join('\n'));
  process.exit(1);
}
console.log(`✓ All checks passed. ${headings.length} headings, ${ids.size} ids, page is ${kb} KB before compression.`);
