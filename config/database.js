const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true,
    UseNewUrlParser: true,
})
.then(()=> console.log("Database connected"))
.catch(err => console.error(err))