// Establish a connection to a local MongoDB server running on the default port (27017).
const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');

// connect to atlas
// mongoose
//   .connect("mongodb+srv://zelrharbi:zakariawidad2015@cluster0.nzpi1ss.mongodb.net/?retryWrites=true&w=majority")
//   .then(() => console.log("Connected to the MongoDB database"))
//   .catch((error) => console.log("Error connecting to the MongoDB database: ", error));

// Connect to your MongoDB database using Mongoose
mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error: ", error));
// Create a user schema with fields name, email, age, and a createdAt of type 
// Date with a default value set to the current date and time.
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number }
}, { timestamps: true });

// Create a Mongoose model by associating the schema with a specific collection in the database.
const User = mongoose.model('User', userSchema);

// Creating a new user:

const CreateUser = async()=>{
    try {
        const newUser = await new User({
          name: "Mijke Ross",
          email: "mike.rosse@arkx.group",
          age: 30,
        }).save();
    } catch (error) {
        console.log('error creating user');
    }
};
CreateUser();

const FetchUser = async () =>{
    try {
        const findUser = await User.find({name : "Mike Ross", email: "mike.rosse@arkx.group"});
        console.log(findUser);  
        // collection.findOne({ name: "Mike Ross" })
    } catch (error) {
        console.log('user not found');
    }
}
FetchUser();

// Update User Email:
const updateMail = async (email) =>{
    try {
        const UpdateUser = await User.findOneAndUpdate(
            { email: email},
            { $set: { email: "er@arkx.group"} }
            );
    } catch (error) {
        console.log('update failed');
    }
}
updateMail("mike.rosse@arkx.group");

// Deleting a user:
const deleteUsers = async (email) =>{
    try {
        const deleteUser = await User.findOneAndDelete({ email: email })
    } catch (error) {
        console.log('delete user failed');
    }
}
deleteUsers("er@arkx.group");

app.listen(3000, () => {
    console.log('Server started on port 3000');
});