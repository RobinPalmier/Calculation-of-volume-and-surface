'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cylindre = sequelize.define('Cylindre', {
    type: DataTypes.STRING,
    calcul: DataTypes.STRING,
    rayonCylindre: DataTypes.STRING,
    hauteurCylindre: DataTypes.STRING,
    resultat: DataTypes.STRING
  }, {});
  Cylindre.associate = function(models) {
    // associations can be defined here
  };
  return Cylindre;
};