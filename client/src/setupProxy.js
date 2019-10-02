const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:3005',
    }),
  );
  app.use(
    '/auth',
    proxy({
      target: 'http://localhost:3005',
    }),
  );
};
