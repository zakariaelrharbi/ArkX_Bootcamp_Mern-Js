const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    name:{type: String, required: true, min: 5, max: 15},
    email:{type: String, required: true, unique: true},
    age:{type: Number, required: true},
    password:{type: String, required: true, min: 6, max: 20}
}, {timestamps: true});

const Users = mongoose.model('Users', Userschema);
module.exports = Users;