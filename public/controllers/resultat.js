module.exports = {
  getResultat(req, res){
    let dataFromJson = require('../views/data.json');

    if(dataFromJson.resultat === null){
      res.redirect('/');
    }

    // On définie l'unitée de mesure en fonction du calcule :
    let u;
    if(dataFromJson.calcul === 'Surface'){
     u = 2;
    }
    else{
      u = 3;
    }
    res.render('resultat.ejs', {data:dataFromJson, unite:u});
  }
}
