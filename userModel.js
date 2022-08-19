
const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { stringify } = require('querystring');

const userSchema  =  mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
    
},{timeStamp: true})


module.exports = mongoose.model('user',userSchema);
