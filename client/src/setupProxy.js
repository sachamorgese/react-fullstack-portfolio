const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3005',
    }),
  );
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://localhost:3005',
    }),
  );
};
