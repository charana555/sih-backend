const mongoose = require("mongoose");
 const DB = 'mongodb://localhost:27017/sih'

mongoose.Promise = global.Promise ;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() =>{
    console.log(`we are connected`);
}).catch((err) => console.log(err));