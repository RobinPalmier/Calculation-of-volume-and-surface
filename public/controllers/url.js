const fu  = require('./functions');
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

    if(req.url !== '/'){
      let checkerType = typeController.getType(req.query);
      let checkerCalcul = calculController.getCalcul(req.query);
      let checkerValue = valueController.getValue(checkerType, req.query);

      let existDatabase = checkDatabase.checkDB(checkerType, checkerCalcul, checkerValue, function (response){
        if(response){
          let dataFromBase = fu.recupFromDatabase(response[0]);
          fs.writeFile("public/views/data.json", JSON.stringify(dataFromBase), (err) => console.log('Error : '+err));
        }
        else{
          let calculDesValeurs = calcul.calcul(checkerType, checkerCalcul, checkerValue);
          ajoutDb.addBdd(calculDesValeurs);
          fs.writeFile("public/views/data.json", JSON.stringify(calculDesValeurs), (err) => console.log('Error : '+err));
        }
      });
    }
  }
}
