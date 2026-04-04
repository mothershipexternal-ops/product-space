const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const ROOT = __dirname;
const EXCLUDE = new Set(['.claude', '.git', 'node_modules']);

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

app.use(express.static(__dirname));

app.get('/api/tree', (_req, res) => {
  res.json(buildTree(ROOT));
});

app.get('/api/watch', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const watcher = fs.watch(ROOT, { recursive: true }, (_eventType, filename) => {
    if (filename && filename.endsWith('.md')) {
      res.write('data: refresh\n\n');
    }
  });

  req.on('close', () => watcher.close());
});

app.get('/api/file', (req, res) => {
  const filePath = req.query.path;
  if (!filePath) return res.status(400).send('Missing path');

  const full = path.resolve(ROOT, filePath);
  if (!full.startsWith(ROOT + path.sep) && full !== ROOT) {
    return res.status(403).send('Forbidden');
  }

  try {
    res.type('text/plain').send(fs.readFileSync(full, 'utf8'));
  } catch {
    res.status(404).send('Not found');
  }
});

const PORT = 3456;
app.listen(PORT, () => {
  console.log(`Research viewer running at http://localhost:${PORT}`);
});
