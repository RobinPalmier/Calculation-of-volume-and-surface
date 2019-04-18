module.exports = {
  getCalcul(data){
    switch (data.calcul) {
      case 'Surface':
        return {'calcul':'Surface'}
        break;
        case 'Volume':
          return {'calcul':'Volume'}
          break;
      default:
          return false;
    }
  },
}
