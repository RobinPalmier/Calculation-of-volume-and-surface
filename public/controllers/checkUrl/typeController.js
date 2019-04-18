module.exports = {
  getType(data){
    switch (data.typeObjet) {
      case 'Cube':
        return {'typeObjet':'Cube'}
        break;
        case 'Cylindre':
          return {'typeObjet':'Cylindre'}
          break;
          case 'Sphere':
            return {'typeObjet':'Sphere'}
            break;
      default:
          return false;
    }
  }
}
