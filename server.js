const express = require('express');
const routes = require('./routes/index');
const server = express();

// On charge tout les fichiers static.
server.use('/public', express.static('public'));
// On déclare le dossier des views.
server.set('views', './public/views');
// On déclare le view-engine.
server.set ('view-engine', 'ejs');

// On gère les routes :
routes(server)

// On ecoute sur le port 3050 :
server.listen(3050, () => console.log("Ecoute sur le port 3050"));
