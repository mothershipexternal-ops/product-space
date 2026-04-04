const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PUBLIC = path.join(ROOT, 'public');
const EXCLUDE = new Set(['.claude', '.git', 'node_modules', 'api', '.vercel', 'public']);

fs.mkdirSync(PUBLIC, { recursive: true });

function buildTree(dir, relPath = '') {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return [];
  }

  const dirs = [];
  const files = [];

  for (const entry of entries) {
    if (EXCLUDE.has(entry.name) || entry.name.startsWith('.')) continue;
    const entryRel = relPath ? `${relPath}/${entry.name}` : entry.name;
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const children = buildTree(fullPath, entryRel);
      if (children.length > 0) {
        dirs.push({ type: 'dir', name: entry.name, path: entryRel, children });
      }
    } else if (entry.name.endsWith('.md')) {
      const destPath = path.join(PUBLIC, entryRel);
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(fullPath, destPath);
      files.push({ type: 'file', name: entry.name, path: entryRel });
    }
  }

  return [...dirs, ...files];
}

const tree = buildTree(ROOT);

fs.copyFileSync(path.join(ROOT, 'index.html'), path.join(PUBLIC, 'index.html'));
fs.writeFileSync(path.join(PUBLIC, 'tree.json'), JSON.stringify(tree));

console.log(`Built ${tree.reduce((n, _) => n + 1, 0)} top-level entries → public/`);
