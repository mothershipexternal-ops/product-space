// SSE live-reload is not supported in serverless deployments.
// Closing immediately so the client's EventSource shuts down cleanly.
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.end();
};
