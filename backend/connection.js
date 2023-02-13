const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.wyu4jib.mongodb.net/MERNCHATApp?retryWrites=true&w=majority`).then(()=>
console.log("DB connection successfull")).catch(()=>{
          console.log("Some error occured")
})