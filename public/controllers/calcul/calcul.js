module.exports = {
  calcul(type, calcul, value){
    switch (type.typeObjet) {
      case 'Cube':
      if(calcul.calcul === 'Surface'){
        return resulats = {
          type: type.typeObjet,
          calcul: calcul.calcul,
          coteCube: value.coteCube,
          resultat: 6*Math.pow(value.coteCube, 2)
        }
      }
      else{
        return resulats = {
          type: type.typeObjet,
          calcul: calcul.calcul,
          coteCube: value.coteCube,
          resultat: Math.pow(value.coteCube, 3)
        }
      }
        break;
        case 'Cylindre':
        if(calcul.calcul === 'Surface'){
          return resulats = {
            type: type.typeObjet,
            calcul: calcul.calcul,
            rayonCylindre: value.rayonCylindre,
            hauteurCylindre: value.hauteurCylindre,
            surfaceLateral: (Math.PI*2)*value.rayonCylindre*value.hauteurCylindre,
            surfaceCote: (Math.PI*Math.pow(value.rayonCylindre, 2))*2,
            resultat: ((Math.PI*2)*value.rayonCylindre*value.hauteurCylindre) + ((Math.PI*Math.pow(value.rayonCylindre, 2))*2)
          }
        }
        else{
          return resulats = {
            type: type.typeObjet,
            calcul: calcul.calcul,
            rayonCylindre: value.rayonCylindre,
            hauteurCylindre: value.hauteurCylindre,
            resultat: Math.PI*Math.pow(value.rayonCylindre, 2)*value.hauteurCylindre
          }
        }
          break;
          case 'Sphere':
          if(calcul.calcul === 'Surface'){
            return resulats = {
              type: type.typeObjet,
              calcul: calcul.calcul,
              rayonSphere: value.rayonSphere,
              resultat: (4*Math.PI)*Math.pow(value.rayonSphere, 2)
            }
          }
          else{
            return resulats = {
              type: type.typeObjet,
              calcul: calcul.calcul,
              rayonSphere: value.rayonSphere,
              resultat: Math.pow(value.rayonSphere, 3)*(Math.PI*4)/3
            }
          }
            break;
      default:
        return false;
    }
  }
}
