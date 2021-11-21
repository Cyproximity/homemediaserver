require("dotenv").config()

const express = require("express")
const logger = require("morgan")
const createError = require("http-errors")

const connectDb = require("./db/conn")
const { v1, pages } = require("./routes")

const app = express()
const port = process.env.PORT || 4000

app.set('views', './app/views')
app.set('view engine', 'pug')

app.use(logger(process.env.NODE_ENV!="production"?"tiny":"combined"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use("/api/v1", v1)
app.use("/", pages)

app.use((req, res, next) => {
  next(createError(404))
})

connectDb().then(async db => {
  db.models = require("./app/models")
  app.listen(port, () => console.log("Listens on http://localhost:"+port))
}).catch(e => {
  console.log(e)
})

