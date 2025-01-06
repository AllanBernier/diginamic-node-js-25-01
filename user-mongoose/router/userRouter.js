const router = require("express").Router()
const { index, getById, create, update, destroy } = require("../controller/userController.js")


router.get("/users/", index)
router.get("/users/:id", getById)
router.post("/users/", create)
router.put("/users/:id", update)
router.delete("/users/:id", destroy)

module.exports = router

