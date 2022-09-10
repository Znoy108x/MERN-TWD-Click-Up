const express = require("express")
const cors = require("cors")
const connectToMongoose = require("./db")
const bodyParser = require('body-parser')
const app = express()
require("dotenv").config()
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
connectToMongoose()
// ------------ routes
app.use("/api" , require("./routes/notes"))
app.use("/api" , require("./routes/user"))
// ------------ routes
const port = process.env.PORT || 5000 
app.listen(port , ()=>{
    console.log(`Running on Port ${port} 👍`)
})