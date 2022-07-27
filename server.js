require("dotenv").config()
require("./config/database")
const ck = require('ckey');

const cors = require("cors")
const express = require("express")

const Router = require("./routes")
const passport = require('passport');

const PORT = ck.PORT
const server = express();

//middlewares
server.use(cors())
server.use(express.json())
server.use("/api", Router)
server.use(passport.initialize())

server.get('/', (req,res) => {
    res.send('SERVER INITIALIZED');
});

server.listen(PORT, ()=>{
    console.log("Server ready on port: " + PORT)
})