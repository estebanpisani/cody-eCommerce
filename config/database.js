const mongoose = require("mongoose");
const ck = require('ckey');

mongoose.connect(ck.MONGO_URI,{
    useUnifiedTopology: true,
    UseNewUrlParser: true,
})
.then(()=> console.log("Database connected"))
.catch(err => console.error(err))