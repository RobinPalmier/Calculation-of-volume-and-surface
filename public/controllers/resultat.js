module.exports = {
  getResultat(req, res){
    let dataFromJson = require('../views/data.json');

    // On définie l'unitée de mesure en fonction du calcule :
    let u;
    if(dataFromJson.calcul === 'Surface'){
      let u = 2;
    }
    else{
      let u = 3;
    }
    res.render('resultat.ejs', {data:dataFromJson, unite:u});
  }
}
