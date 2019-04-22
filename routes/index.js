checkUrl = require('../public/controllers/url');
results = require('../public/controllers/resultat')
module.exports = (server) => {
  server.get('/', checkUrl.getUrl);
  server.get('/resultat',results.getResultat);
}
