const mongoose = require('mongoose');
const  Schema = mongoose.Schema
const userSchema = new Schema({
    name:{
        type: String    
    },
    lastname:{
        type: String    
    },
    email:{
        type: String    
    },
    password:{
        type: String    
    }
},{timestamps:true})

module.exports.user = mongoose.model('User', userSchema);
