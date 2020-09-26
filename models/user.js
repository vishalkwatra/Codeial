const mongoose = require('mongoose');

const userScehma = new mongoose.Schema({
    email :{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

const User = mongoose.model('User', userScehma);

module.exports = User;
