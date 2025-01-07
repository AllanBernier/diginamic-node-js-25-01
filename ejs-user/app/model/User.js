
const db = require("../config/database")
const sequelize = require("sequelize")

const User = db.define('user', {
  id: { type: sequelize.INTEGER, autoIncrement : true, primaryKey : true },
  name: { type: sequelize.STRING },
  age: { type: sequelize.INTEGER },
})

module.exports = User