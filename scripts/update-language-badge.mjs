import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const ignoredDirectories = new Set([
  ".git",
  ".github",
  "coverage",
  "dist",
  "node_modules",
]);

const languageByExtension = new Map([
  [".css", "CSS"],
  [".html", "HTML"],
  [".js", "JavaScript"],
  [".jsx", "JavaScript"],
]);

async function collectLanguageBytes(directory, totals = new Map()) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        await collectLanguageBytes(fullPath, totals);
      }
      continue;
    }

    const language = languageByExtension.get(path.extname(entry.name));
    if (!language) {
      continue;
    }

    const contents = await readFile(fullPath);
    totals.set(language, (totals.get(language) ?? 0) + contents.byteLength);
  }

  return totals;
}

const totals = await collectLanguageBytes(repoRoot);
const totalBytes = [...totals.values()].reduce((sum, bytes) => sum + bytes, 0);
const javascriptBytes = totals.get("JavaScript") ?? 0;
const percentage = totalBytes === 0 ? 0 : (javascriptBytes / totalBytes) * 100;

const badge = {
  schemaVersion: 1,
  label: "JavaScript",
  message: `${percentage.toFixed(1)}%`,
  color: "f1e05a",
  namedLogo: "javascript",
};

await mkdir(path.join(repoRoot, "badges"), { recursive: true });
await writeFile(
  path.join(repoRoot, "badges", "languages.json"),
  `${JSON.stringify(badge, null, 2)}\n`,
);
