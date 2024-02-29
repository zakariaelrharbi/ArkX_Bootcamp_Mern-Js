// Establish a connection to a local MongoDB server running on the default port (27017).
const express = require('express');
const app = express();
app.use(express.json());
const { MongoClient } = require("mongodb");

// Define the MongoDB connection URL
const url = "mongodb://localhost:27017";

// Create a new MongoClient instance
const client = new MongoClient(url);

// Connect to the MongoDB server
client
  .connect()
  .then(() => console.log("Connected to the MongoDB server"))
  .catch((error) => console.log("Error connecting to the MongoDB server: ", error));

// Create a new database named "mydb" and a collection named "users."

const db = client.db('mydb');
const collection = db.collection('users');

// Insert at least three users into the "users" collection with different names and ages.
collection.insertMany([
  { name: "zakaria", age: 25, email: "zakaria@example.com" },
  { name: "kilozerko", age: 40, email: "kilozerko@example.com" },
  { name: "itachi", age: 19, email: "itachi@example.com" }
])
  .then((user) => console.log("User Created Successfully: ", user))
  .catch((error) => console.log("Error: ", error));
;
app.listen(3000, () => {
    console.log('Server started on port 3000');
});