const dotenv = require("dotenv")
dotenv.config()
require("./config/database")
const cors = require("cors")
const express = require("express")
const Router = require("./routes")

const PORT = 4000
const server = express();

//middlewares
server.use(cors())
server.use(express.json())
server.use("/api", Router)
server.get('/', (req,res) => {
    res.send('SERVER INITIALIZED');
});
//server.use(passport.initialize())

server.listen(PORT, ()=>{
    console.log("Server ready on port: " + PORT)
})