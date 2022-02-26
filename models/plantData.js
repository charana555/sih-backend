const mongoose = require("mongoose");


const createSchema = new mongoose.Schema({
    id:{
        type:String,
    },
    cropName:{
        type:String,
    },
    description:{
        type:String,
    },
    links:{
        type:Array,
    }
});

const plant= new mongoose.model("plant" ,createSchema);

module.exports = plant;