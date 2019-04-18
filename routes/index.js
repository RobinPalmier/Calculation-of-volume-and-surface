checkUrl = require('../public/controllers/url');
module.exports = (server) => {
  server.get('/', checkUrl.getUrl);
}
