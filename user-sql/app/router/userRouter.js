const { create, getById, index, destroy, update } = require("../controller/userController")
const express = require("express")
const router = express.Router()

router.post("/users", create)
router.get("/users", index)
router.get("/users/:id", getById)
router.put("/users/:id", update)
router.delete("/users/:id", destroy)

module.exports = router