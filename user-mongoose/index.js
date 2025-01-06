const mongoose = require("mongoose")
require("dotenv").config()
const express = require("express")
const userRouter = require("./router/userRouter")

const app = express()

app.use(express.json())
app.use(userRouter)

mongoose.connect(process.env.MONGO_URI)
.then(()=> {
  console.log("Connected")
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
  })
}).catch((err) => {
  console.log("err", err)
})