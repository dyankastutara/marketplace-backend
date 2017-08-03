require('dotenv').config()

module.exports = {
  "development": {
    "username": "postgres",
    "password": 12345,
    "database": "db_marketplace",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": 12345,
    "database": "db_marketplace_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": 12345,
    "database": "db_marketplace_pro",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
