// Establish a connection to a local MongoDB server running on the default port (27017).
const express = require('express');
const app = express();
app.use(express.json());
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

client
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.log("Error: ", error));

// Create a new database named "mydb" and a collection named "users."
const db = client.db('mydb');
const collection = db.collection('users');

// Insert at least three users into the "users" collection with different names and ages.
collection
  .insertOne({ name: "Zakaria", age: "25" })
  .then((user) => console.log("User Created Successfully: ", user))
  .catch((error) => console.log("Error: ", error));
collection
  .insertOne({ name: "Senko", age: "21" })
  .then((user) => console.log("User Created Successfully: ", user))
  .catch((error) => console.log("Error: ", error));
collection
  .insertOne({ name: "itachi", age: "22" })
  .then((user) => console.log("User Created Successfully: ", user))
  .catch((error) => console.log("Error: ", error));

app.listen(3000, () => {
    console.log('Server started on port 3000');
});