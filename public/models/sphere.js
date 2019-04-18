'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sphere = sequelize.define('Sphere', {
    type: DataTypes.STRING,
    calcul: DataTypes.STRING,
    rayonSphere: DataTypes.STRING,
    resultat: DataTypes.STRING
  }, {});
  Sphere.associate = function(models) {
    // associations can be defined here
  };
  return Sphere;
};