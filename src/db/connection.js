const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'nodetest',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = sequelize;