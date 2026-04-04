const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const EXCLUDE = new Set(['.claude', '.git', 'node_modules', 'api', '.vercel']);

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

    if (entry.isDirectory()) {
      dirs.push({
        type: 'dir',
        name: entry.name,
        path: entryRel,
        children: buildTree(path.join(dir, entry.name), entryRel),
      });
    } else if (entry.name.endsWith('.md')) {
      files.push({ type: 'file', name: entry.name, path: entryRel });
    }
  }

  return [...dirs, ...files];
}

module.exports = (req, res) => {
  res.json(buildTree(ROOT));
};
