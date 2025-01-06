const mongoose = require("mongoose")
const express = require("express")
require("dotenv").config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then((res) => {
    console.log("Connected")

    app.listen(process.env.PORT, () => {
      console.log("App listening on port 3000")
    })
  }).catch((err) => {
    console.log("Err", err)
  })




// controller
const Product = require("./model/Product")

app.post("/products", (req, res) => {

  console.log(req.body)

  Product.create(req.body)
    .then((product) => {
      res.status(201).json({ message: "Product created !", product })
    }).catch((err) => {
      res.status(500).json({ message: "Internal server error !" })
    })
})


app.get("/products", async (req, res) => {
  try {
    const products = await Product.find()
   res.json(products)
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" })
  }
})

app.get("/products/:id", async (req, res) => {
  const {id } = req.params

  try {
    const product = await Product.findById(id)
    res.json(product)
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" })
  }
})

app.put("/product/:id", async (req, res) => {
  const {id } = req.params

  try {
    const product = findByIdAndUpdate(id, req.body)
    res.json(product)
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" })
  }
})

app.delete("/product/:id", async (req, res) => {
  const {id } = req.params

  try {
    const product = findByIdAndDelete(id)
    res.json(product)
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" })
  }
})