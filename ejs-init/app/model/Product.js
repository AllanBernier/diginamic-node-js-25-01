
const db = require("../config/database")
const sequelize = require("sequelize")

const Product = db.define('product', {
  id: { type: sequelize.INTEGER, autoIncrement : true, primaryKey : true },
  name: { type: sequelize.STRING },
  price: { type: sequelize.FLOAT },
  description: { type: sequelize.TEXT },
})

module.exports = Product