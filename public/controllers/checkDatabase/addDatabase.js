const database = require('./db_connect');
module.exports = {
  addBdd(data){
    switch (data.type) {
      case 'Cube':
      database.db.query('INSERT INTO cube SET ?', [data], function (err, results) {
          if(err){
              console.log(err.message);
          }
      });
        break;
        case 'Cylindre':
        database.db.query('INSERT INTO cylindre SET ?', [data], function (err, results) {
            if(err){
                console.log(err.message);
            }
        });
          break;
          case 'Sphere':
          database.db.query('INSERT INTO sphere SET ?', [data], function (err, results) {
              if(err){
                  console.log(err.message);
              }
          });
            break;
      default:
        return false;
    }
  }
}
