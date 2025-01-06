const Product = require("../model/Product")

const getById = (req, res) => {
  const { id } = req.params

  Product.findByPk(parseInt(id)).then((product) => {
    res.json(product)
  })
}

const getAll = (req, res) => {

  Product.findAll().then((products) => {
    res.json(products)
  })

}

const create = (req, res) => {
  Product.create(req.body).then((result) => {
    res.status(201).json(result)
  })
}

const update = (req, res) => {
  const { id } = req.params

  Product.update(req.body, { where: { id: parseInt(id) } }).then((product) => {
    res.json({ message: "Product updated", product })
  })
}

const destroy = (req, res) => {
  Product.destroy({ where: { id: parseInt(req.params.id) } }).then((product) => {
    res.json({ message: "Product deleted", product })
  })
}

module.exports = { getById, getAll, create, update, destroy }