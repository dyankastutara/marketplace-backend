'use strict';
const models = require('../models');
const {encrypt} = require('../helpers/encrypt-decrypt');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return models.User.find({})
    .then((users) => {
      if (users == null) {
        return queryInterface.bulkInsert('Users', [
          {
            "name":"superadmin",
            "email":"superadmin@email.com",
            "phone_number":"1234567890",
            "username":"superadmin",
            "password":encrypt("superadmin"),
            "gender":"Man",
            "urlImg":"http://img.com",
            "address":"nn",
            "city":"nn",
            "postal_code":"12345",
            "role_id":1, 
            "createdAt":new Date(),
            "updatedAt":new Date()
          },
          {
            "name":"admin12",
            "email":"admin12@email.com",
            "phone_number":"1234567890",
            "username":"admin12",
            "password":encrypt("admin12"),
            "gender":"Man",
            "urlImg":"http://img.com",
            "address":"nn",
            "city":"nn",
            "postal_code":"12345",
            "role_id":2, 
            "createdAt":new Date(),
            "updatedAt":new Date()
          },
          {
            "name":"user",
            "email":"user@email.com",
            "phone_number":"1234567890",
            "username":"user",
            "password":encrypt("user12"),
            "gender":"Man",
            "urlImg":"http://img.com",
            "address":"nn",
            "city":"nn",
            "postal_code":"12345",
            "role_id":3, 
            "createdAt":new Date(),
            "updatedAt":new Date()
          }
        ])
      }else {
        queryInterface.bulkDelete('Users', null, {});
        return queryInterface.bulkInsert('Users', [
          {
            "name":"superadmin",
            "email":"superadmin@email.com",
            "phone_number":"1234567890",
            "username":"superadmin",
            "password":encrypt("superadmin"),
            "gender":"Man",
            "urlImg":"http://img.com",
            "address":"nn",
            "city":"nn",
            "postal_code":"12345",
            "role_id":1, 
            "createdAt":new Date(),
            "updatedAt":new Date()
          },
          {
            "name":"admin12",
            "email":"admin12@email.com",
            "phone_number":"1234567890",
            "username":"admin12",
            "password":encrypt("admin12"),
            "gender":"Man",
            "urlImg":"http://img.com",
            "address":"nn",
            "city":"nn",
            "postal_code":"12345",
            "role_id":2, 
            "createdAt":new Date(),
            "updatedAt":new Date()
          },
          {
            "name":"user",
            "email":"user@email.com",
            "phone_number":"1234567890",
            "username":"user",
            "password":encrypt("user12"),
            "gender":"Man",
            "urlImg":"http://img.com",
            "address":"nn",
            "city":"nn",
            "postal_code":"12345",
            "role_id":3, 
            "createdAt":new Date(),
            "updatedAt":new Date()
          }
        ])
      }
    })
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
