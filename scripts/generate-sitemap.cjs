/**
 * scripts/generate-sitemap.js
 *
 * Usage: node scripts/generate-sitemap.js
 * Recommended: add as "postbuild" script in package.json so it runs after `npm run build`.
 *
 * This script:
 * - scans `dist` (built site) and `public` (static) and `docs` (markdown docs),
 * - converts file paths to URL paths,
 * - writes public/sitemap.xml with <loc> and <lastmod>.
 *
 * Notes:
 * - HOSTNAME should be your production domain (https://vero.co.in)
 * - If you want extra routes, add to EXTRA_URLS
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");

const HOSTNAME = "https://vero.co.in";
const OUT_DIR = path.resolve(__dirname, "../public");
const OUT_FILE = path.join(OUT_DIR, "sitemap.xml");

// directories to scan (prioritized)
const SCAN_DIRS = [
  path.resolve(__dirname, "../dist"),
  path.resolve(__dirname, "../components"),
  path.resolve(__dirname, "../public"),
  path.resolve(__dirname, "../docs")
];

// patterns to include (extensions)
const INCLUDE_PATTERNS = ["**/*.html", "**/*.htm", "**/*.md", "**/*.mdx"];

// optional additional URLs (absolute path parts)
const EXTRA_URLS = [
  "/", // always include home
  // "/docs/", // you can add static routes here if you need them
];

const EXCLUDE_GLOB = ["**/node_modules/**", "**/.git/**", "**/*.map", "**/*.test.*", "**/drafts/**"];

function dedupe(arr) {
  return Array.from(new Set(arr));
}

function fileToUrl(filePath) {
  // make it relative to one of the scan roots
  const rel = filePath.replace(/\\/g, "/");
  // normalize: if file ends with index.html => strip to dir
  if (/\/index\.(html|htm)$/.test(rel)) {
    return "/" + rel.replace(/\/index\.(html|htm)$/, "").replace(/^dist\/|^public\//, "");
  }
  // strip extensions (.html, .md, .mdx)
  const stripped = rel.replace(/\.(html|htm|md|mdx)$/, "");
  // remove leading directory names like dist/ or docs/
  return "/" + stripped.replace(/^dist\/|^public\//, "").replace(/^docs\//, "docs/").replace(/^\/+/, "");
}

function getLastMod(file) {
  try {
    const stat = fs.statSync(file);
    return stat.mtime.toISOString().slice(0, 10);
  } catch (err) {
    return null;
  }
}

function buildUrlEntry(locPath, lastmod) {
  const url = `${HOSTNAME}${locPath}`;
  const lm = lastmod ? `<lastmod>${lastmod}</lastmod>` : "";
  // heuristics for changefreq/priority
  let changefreq = "monthly";
  let priority = "0.5";
  if (locPath === "/" || locPath === "/index") {
    changefreq = "weekly";
    priority = "1.0";
  } else if (locPath.startsWith("/docs") || locPath.startsWith("/blog")) {
    changefreq = "monthly";
    priority = "0.7";
  }

  return `  <url>
    <loc>${url}</loc>
    ${lm}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

(async () => {
  try {
    const urls = [];

    // include EXTRA_URLS first
    EXTRA_URLS.forEach(u => {
      urls.push({ path: u, lastmod: new Date().toISOString().slice(0, 10) });
    });

    // scan directories
    for (const root of SCAN_DIRS) {
      if (!fs.existsSync(root)) continue;

      for (const pattern of INCLUDE_PATTERNS) {
        const matches = glob.sync(pattern, {
          cwd: root,
          absolute: true,
          nodir: true,
          ignore: EXCLUDE_GLOB
        });

        matches.forEach(file => {
          const potential = fileToUrl(path.relative(path.resolve(__dirname, ".."), file));
          // normalize trailing slash: use "/" for root only; otherwise remove trailing slash
          const urlPath = potential === "/." ? "/" : potential.replace(/\/\.$/, "/");
          const lastmod = getLastMod(file);
          urls.push({ path: urlPath, lastmod });
        });
      }
    }

    // dedupe & normalize
    const normalized = dedupe(urls.map(u => JSON.stringify(u))).map(s => JSON.parse(s));

    // ensure public dir exists
    if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

    // assemble xml
    const header = '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    const footer = "</urlset>\n";

    const entries = normalized.map(u => buildUrlEntry(u.path, u.lastmod)).join("\n");

    const finalXml = header + entries + "\n" + footer;

    fs.writeFileSync(OUT_FILE, finalXml, "utf8");
    console.log(`sitemap generated: ${OUT_FILE}`);
    console.log(`You can view it at ${HOSTNAME}/sitemap.xml after deploy`);
  } catch (err) {
    console.error("Error generating sitemap:", err);
    process.exit(1);
  }
})();
