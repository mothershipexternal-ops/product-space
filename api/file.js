const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

module.exports = (req, res) => {
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
};
