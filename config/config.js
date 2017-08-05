require('dotenv').config()

module.exports = {
  "development": {
    "username": "root",
    "password": 12345,
    "database": "db_marketplace",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": 12345,
    "database": "db_marketplace_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": 12345,
    "database": "db_marketplace",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
