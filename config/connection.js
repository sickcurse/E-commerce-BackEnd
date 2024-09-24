require('dotenv').config();
const { DB_URL, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
const Sequelize = require('sequelize');


const sequelize = DB_URL
  ? new Sequelize(DB_URL)
  : new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
