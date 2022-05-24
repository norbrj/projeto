const Sequelize = require("sequelize")

const sequelize = new Sequelize('postgres://postgres:postgres@127.0.0.1:15432/postgres')

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}