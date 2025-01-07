const Product = require("../model/Product")

const show = (req, res) => {

  Product.findByPk(parseInt(req.params.id))
    .then((product) => res.render("show", { product }))
}
const index = (req, res) => {
  Product.findAll()
    .then((products) => res.render("index", { products }))
}
const create = (req, res) => {
  res.render("create")
}
const edit = (req, res) => {

  res.render("edit")
}

const store = (req, res) => {

  Product.create(req.body)
    .then((u) => res.redirect("/products"))
}

const update = (req, res) => { }


const destroy = (req, res) => {
  Product.destroy({ where: { id: parseInt(req.params.id) }})
  .then( () => res.redirect("/products"))
}

module.exports = { show, index, create, edit, store, update, destroy }