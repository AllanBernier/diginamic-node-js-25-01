const express = require("express")
const userRouter = require("./app/router/userRouter")

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(userRouter)

app.set("view engine", "ejs")
app.set("views", "app/views")

app.get("/", (req, res) => {
  res.render("index", { variable : "Ma variable"})
})


app.listen(3000, () => {
  console.log("App started")
})