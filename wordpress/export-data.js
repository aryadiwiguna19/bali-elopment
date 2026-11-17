// Exports the site data in js/script.js to JSON for the WordPress theme.
// Usage: node wordpress/export-data.js <output-dir>
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const outDir = process.argv[2] || path.join(__dirname, "build-data");
const source = fs.readFileSync(path.join(root, "js", "script.js"), "utf8");

const noop = () => {};
const sandbox = { document: { addEventListener: noop }, window: { addEventListener: noop }, console };
const data = vm.runInNewContext(
  `${source}\n;({ SITE_CONFIG, PACKAGE_SERVICES, PACKAGES_DATA, PORTFOLIO_DATA, PORTFOLIO_ALIASES, PORTFOLIO_FILMS })`,
  sandbox
);

const slugify = text => text.toLowerCase().normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/[\s_-]+/g, "-");

// Pretty URL slugs: /elopement/, /villa-wedding/, /pre-wedding/ and /packages/<venue>/
const SERVICE_SLUGS = { "elopement": "elopement", "private-villa": "villa-wedding", "pre-wedding": "pre-wedding" };
Object.entries(data.PACKAGE_SERVICES).forEach(([key, service]) => {
  service.key = key;
  service.slug = SERVICE_SLUGS[key] || key;
});
const seen = new Set();
Object.values(data.PACKAGES_DATA).forEach(pkg => {
  let slug = slugify(pkg.name);
  if (seen.has(slug)) slug = `${slug}-${pkg.id}`;
  seen.add(slug);
  pkg.slug = slug;
});

fs.mkdirSync(outDir, { recursive: true });
const write = (name, value) => fs.writeFileSync(path.join(outDir, name), JSON.stringify(value, null, 2) + "\n");
write("site.json", data.SITE_CONFIG);
write("packages.json", { services: data.PACKAGE_SERVICES, packages: data.PACKAGES_DATA });
write("portfolio.json", { stories: data.PORTFOLIO_DATA, aliases: data.PORTFOLIO_ALIASES, films: data.PORTFOLIO_FILMS });

console.log(`Exported ${Object.keys(data.PACKAGES_DATA).length} packages, ${Object.keys(data.PORTFOLIO_DATA).length} stories to ${outDir}`);
console.log(Object.values(data.PACKAGES_DATA).map(p => `${p.id} -> ${p.slug}`).join("\n"));
