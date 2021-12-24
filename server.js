const express = require('express')
const app = express()
const port = 5000
const connectdb=require('./config/connectdb')
require("dotenv").config()
app.use(express.json())
connectdb()

app.use("/api",require("./routes/user"))

app.listen(port, (ereur) => ereur?console.log(ereur): console.log(`Example app listening on port port!`))

