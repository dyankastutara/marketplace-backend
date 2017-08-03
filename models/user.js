'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    urlImg: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  });
  return User;
};