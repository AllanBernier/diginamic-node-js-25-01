const User = require("../model/User")

const show = (req, res) => {
  User.findByPk(parseInt(req.params.id))
    .then((user) => res.render("show", { user }))
}
const index = (req, res) => {
  User.findAll()
    .then((users) => res.render("index", { users }))
}
const create = (req, res) => {
  res.render("create")
}

const store = (req, res) => {
  User.create(req.body)
    .then(() => res.redirect("/users"))
}

const edit = (req, res) => {
  User.findByPk(parseInt(req.params.id))
  .then((user) => res.render("edit", { user }))
}

const update = (req, res) => { 
  User.update(req.body, { where: { id: parseInt(req.params.id) } })
  .then( () => res.redirect("/users"))
}

const destroy = (req, res) => {
  User.destroy({ where: { id: parseInt(req.params.id) } })
    .then(() => res.redirect("/users"))
}

module.exports = { show, index, create, edit, store, update, destroy }