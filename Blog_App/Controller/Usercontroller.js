const mongoose = require('mongoose');
const Users = require('../Models/Usersschema');
const bcrypt = require('bcrypt');

const Register = async(req, res) => {
    try { 
        const {name, email, age, password} = req.body;
        if(!name || !email || !age || !password){
            return res.status(400).json('message:', error);
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        const newUser = new Users({
            name: name,
            email: email,
            age: age,
            password: hashedpassword
        }).save();
        console.log('registered successfully');
    } catch (error) {
        console.log(`message:`, error);
    }
}

module.exports = Register;