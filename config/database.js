const mongoose = require("mongoose");
const MONGO_URI = 'mongodb+srv://estebanpisani:holaesteban123@cluster-cody.dmf6u.mongodb.net/Cody-eCommerce?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI,{
    useUnifiedTopology: true,
    UseNewUrlParser: true,
})
.then(()=> console.log("Database connected"))
.catch(err => console.error(err))