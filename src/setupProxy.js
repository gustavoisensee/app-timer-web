const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://my-finances-api.netlify.app/.netlify/functions/api',
      changeOrigin: true,
    })
  );
};