const Product = require("../model/Product")

const show = (req, res) => {
  res.render("show")
}
const index = (req, res) => {
  Product.findAll()
  .then( (products) => res.render("index", { products }))
}
const create = (req, res) => {
  res.render("create")
}
const edit = (req, res) => {

  res.render("edit")
}

const store = (req, res) => {

  Product.create(req.body)
  .then( (u) => res.render("/products"))
}
const update = (req, res) => {}
const destroy = (req, res) => {}

module.exports = { show, index, create, edit, store, update, destroy }