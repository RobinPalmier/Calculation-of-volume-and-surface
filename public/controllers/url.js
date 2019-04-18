const typeController = require('./checkUrl/typeController');
const calculController = require('./checkUrl/calculController');
const valueController = require('./checkUrl/valueController');
const checkDatabase = require('./checkDatabase/existDatabase');
const calcul = require('./calcul/calcul');
const ajoutDb = require('./checkDatabase/addDatabase');
const fs = require('fs');

module.exports = {
  getUrl(req, res){
    res.render('home.ejs');

    if(res.originalUrl != '/'){
      // Partie 1 :
      let checkerType = typeController.getType(req.query);
      let checkerCalcul = calculController.getCalcul(req.query);
      let checkerValue = valueController.getValue(checkerType, req.query);

      // Partie 2
      let existDatabase = checkDatabase.checkDB(checkerType, checkerCalcul, checkerValue);

      // Partie 2 a) Si existe pas :
      let calculDesValeurs = calcul.calcul(checkerType, checkerCalcul, checkerValue);
      let addDatabase = ajoutDb.addBdd(calculDesValeurs);
      let writeInJson = fs.writeFile("public/views/data.json", JSON.stringify(calculDesValeurs));

      
      //console.log(calculDesValeurs);
    }
  }
}
