const f = require('../functions.js');
module.exports = {
  getValue(type, data){
    switch (type.typeObjet) {
      case 'Cube':
        if(f.isFloat(data.coteCube)){
          return {'coteCube':data.coteCube};
        }
        else {
          return false;
        }
        break;
      case 'Cylindre':
          if(f.isFloat(data.rayonCylindre) && f.isFloat(data.hauteurCylindre)){
            return {'rayonCylindre':data.rayonCylindre, 'hauteurCylindre':data.hauteurCylindre};
          }
          else {
            return false;
          }
          break;
        case 'Sphere':
            if(f.isFloat(data.rayonSphere)){
              return {'rayonSphere':data.rayonSphere};
            }
            else {
              return false;
            }
            break;
      default:
            return false;
    }
  }
}
