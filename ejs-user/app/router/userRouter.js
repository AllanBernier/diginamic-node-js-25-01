const express = require("express")
const router = express.Router()
const { show, index, edit, store, create, update, destroy } = require("../controller/userController")


router.get("/users", index)
router.get("/users/create", create)
router.get("/users/:id", show)
router.get("/users/:id/edit", edit)

router.post("/users", store)
router.post("/users/:id/update", update)
router.post("/users/:id/destroy", destroy)

module.exports = router