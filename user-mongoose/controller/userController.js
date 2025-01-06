const User = require("../model/userModel.js")




const getById = (req, res) => {
  const { id } = req.params

  User.findById(id)
    .then((u) => res.json(u))
    .catch((err) => res.status(404).json({ message: "User not found !" }))
}

const index = async (req, res) => {
  const page = parseInt(req.params.page) || 1
  const limit = parseInt(req.params.limit) || 10
  const offset = (page - 1) * limit

  try {
    const totalPages = await User.countDocuments()
    const data = await User.find().skip(offset).limit(limit) 

    res.json({
      data,
      totalPages,
      currentPage: page,
    })

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" })
  }
}


const create = (req, res) => {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch(() => res.status(500).json({ message: "Internal Server Error" }))
}

const update = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
  .then( (user) => {
    if (!user)
      return res.status(404).json({message: "User not found !"})
    res.json(user)
  })
  .catch(() => res.status(500).json({ message: "Internal Server Error" }))
}

const destroy = (req, res) => {
  User.findByIdAndDelete(req.params.id)
  .then( (user) => {
    if (!user)
      return res.status(404).json({message: "User not found !"})
    res.json(user)
  })
  .catch(() => res.status(500).json({ message: "Internal Server Error" }))
}


module.exports = {
  index,
  getById,
  create,
  update,
  destroy
}