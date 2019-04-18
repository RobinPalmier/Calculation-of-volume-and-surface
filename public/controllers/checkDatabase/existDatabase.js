const database = require('./db_connect');
module.exports = {
  checkDB(type, calcul, value){

    let checkCalcul = calcul.calcul;
    let checkType = type.typeObjet;

    switch (checkType) {
      case 'Cube':
      let coteCube = value.coteCube;

      database.db.query('SELECT * FROM cube WHERE `coteCube` = ? AND `calcul` = ?', [coteCube, checkCalcul], function (err, results) {
          if(err){
              console.log(err.message);
          }
          else if(results.length === 0){
            console.log("Existe pas en BDD");
          }
          else{
              console.log(results);
          }
      });
        break;
        case 'Cylindre':
        let rayonCylindre = value.rayonCylindre;
        let hauteurCylindre = value.hauteurCylindre;

        database.db.query('SELECT * FROM cylindre WHERE `rayonCylindre` = ? AND `hauteurCylindre` = ? AND `calcul` = ?', [rayonCylindre,hauteurCylindre,checkCalcul], function (err, results) {
          if(err){
              console.log(err.message);
          }
          else if(results.length === 0){
            console.log("Existe pas en BDD");
          }
          else{
              console.log(results);
          }
        });
    break;
    case 'Sphere':
    let rayonSphere = value.rayonSphere;

    database.db.query('SELECT * FROM sphere WHERE `rayonSphere` = ? AND `calcul` = ?', [rayonSphere, checkCalcul], function (err, results) {
      if(err){
          console.log(err.message);
      }
      else if(results.length === 0){
        console.log("Existe pas en BDD");
      }
      else{
          console.log(results);
      }
    });
      break;
      default:
        return false;
    }
  }
}
