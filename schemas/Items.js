mongoose = require('mongoose'); 

const Item_Schema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    }, 
    Date:{
        type: Date, 
        default: Date.now
    },
    Quantity:{
        type: Number,
        required: true
    },
    Location:{
        type: String,
        required: true
    } 
});


module.exports = item = mongoose.module('item', Item_Schema);  