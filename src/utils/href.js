// The app is served from GitHub Pages via HashRouter, so internal routes live
// behind a "#" (e.g. "#/case-study"). Link data in content.js stores plain
// paths ("/case-study"), so rewrite those at render time.
//
// Passes through unchanged: external URLs, mailto:/tel:, existing "#..." links,
// and real files under /assets (served directly by the static host, not routed).
export function toHash(href) {
  if (typeof href !== "string") return href;
  if (!href.startsWith("/")) return href;
  if (href.startsWith("/assets/")) return href;
  return `#${href}`;
}
