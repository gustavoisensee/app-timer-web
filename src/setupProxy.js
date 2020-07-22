const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://my-finances-web.netlify.app/.netlify/functions/api/',
      changeOrigin: true,
    })
  );
};