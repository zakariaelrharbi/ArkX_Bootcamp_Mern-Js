const express = require('express');
const mongoose = require('mongoose');

const UserRouter = require('./Routes/UsersRoute');
const app = express();
const Port = 3000;
app.use(express.json());

const connection = async() =>{
    try {
        await mongoose.connect("mongodb+srv://zelrharbi:zakariawidad2015@blogcluster.nmdovnh.mongodb.net/?retryWrites=true&w=majority");
    } catch (error) {
        console.log(`message: error`, error);
    }
}
connection();
app.use(UserRouter);







app.listen(Port, () => {
    console.log('Server started on port 3000');
});