const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/.netlify/functions/', {
      target: 'https://my-finances-web.netlify.app/',
      pathRewrite: {
        '^/\\.netlify/functions': '',
      },
    }),
  );
};