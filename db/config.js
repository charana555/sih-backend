const mongoose = require("mongoose");
 const DB = 'mongodb+srv://Charan17:Charan555@cluster0.dezau.mongodb.net/sihbackend?retryWrites=true&w=majority'

mongoose.Promise = global.Promise ;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() =>{
    console.log(`we are connected`);
}).catch((err) => console.log(err));