const User = require("../model/User")


const getById = (req, res) => {
  const { id } = req.params
  User.findByPk(parseInt(id))
    .then((u) => {
      if (!u) {
        return res.status(404).json({ message: "User not found !" })
      }
      res.json(u)
    }).catch((err) => {
      res.status(500).json({ message: "Internal server error !" })
    })
}

const index = async (req, res) => {
  const page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.page) || 10
  const offset = (page - 1) * limit

  try {
    const result = await User.findAndCountAll({ limit, offset })

    console.log(result)
    res.json({
      data: result.rows,
      total: result.count,
      currentPage: page,
      totalPages: Math.round(result.count / limit)
    })
  } catch (error) {
    res.status(500).json({ message: "Internal server error" })
  }
}


const update = async (req, res) => {
  const { id } = req.params

  try {
    const user = await User.findByPk(parseInt(id))
    if (!user) {
      return res.status(404).json({ message: "User not found !" })
    }

    await user.update(req.body)
    res.json({message : "User updated successfully !"})
  } catch (error) {
    res.status(500).json({ message: "Internal server error" })
  }

}

const destroy = async (req, res) => {
  const { id } = req.params

  try {
    const user = await User.findByPk(parseInt(id))
    if (!user) {
      return res.status(404).json({ message: "User not found !" })
    }

    await user.destroy()
    
    res.json({message : "User destroyd successfully !"})
  } catch (error) {
    res.status(500).json({ message: "Internal server error" })
  }
}


const create = async (req, res) => {
  const user = await User.create(req.body)
  res.status(201).json(user)
}



module.exports = { create, getById, index, update, destroy }