const express = require("express")
const router = express.Router()
const { show, index, edit, store, create, update, destroy } = require("../controller/productController")

router.get("/products", index)
router.get("/products/create", create)
router.get("/products/:id/edit", edit)
router.get("/products/:id", show)

router.delete("/products/:id", destroy)
router.post("/products", store)
router.put("/products/:id", update)


module.exports = router