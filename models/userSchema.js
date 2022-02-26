const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:{
        type:String,    
    },
    crops:{
        type:Array,
     },
     language:{
         type:String,
     }
})

const user = new mongoose.model("user" , userSchema);

module.exports = user;