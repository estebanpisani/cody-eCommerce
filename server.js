require("dotenv").config()
require("./config/database")
const cors = require("cors")
const express = require("express")
const Router = require("./routes")
const ck = require('ckey');

const PORT = ck.PORT
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