const { Sequelize } = require('sequelize');

const connection = new Sequelize('scheduling', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;