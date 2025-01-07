const express = require("express")
const productRouter = require("./app/router/productRouter")

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(productRouter)

app.set("view engine", "ejs")
app.set("views", "app/views")

app.get("/", (req, res) => {
  res.render("index", { variable : "Ma variable"})
})


app.listen(3000, () => {
  console.log("App started")
})