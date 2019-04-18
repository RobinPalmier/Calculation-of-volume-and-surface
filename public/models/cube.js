'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cube = sequelize.define('Cube', {
    type: DataTypes.STRING,
    calcul: DataTypes.STRING,
    coteCube: DataTypes.STRING,
    resultat: DataTypes.STRING
  }, {});
  Cube.associate = function(models) {
    // associations can be defined here
  };
  return Cube;
};