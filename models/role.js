'use strict';
module.exports = function(sequelize, DataTypes) {
  var Role = sequelize.define('Role', {
    type: DataTypes.STRING
  });
  return Role;
};