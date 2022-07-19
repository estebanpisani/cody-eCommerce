const dotenv = require("dotenv")
dotenv.config()
require("./config/database")
const cors = require("cors")
const express = require("express")
//const Router = require("./routes/routes")

const PORT = process.env.PORT
const server = express();

//middlewares
server.use(cors())
server.use(express.json())
//server.use(passport.initialize())
//server.use("api",Router)

server.listen(PORT, ()=>{
    console.log("Server ready on port: " + PORT)

})