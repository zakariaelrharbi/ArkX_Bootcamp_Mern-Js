// Connect to MongoDB: In your Node.js application, you need to establish a connection to the MongoDB server. 
// The MongoDB Node.js driver provides a straightforward way to create connections:

const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

client
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.log("Error: ", error));

// Get a reference to the database and collection:

const db = client.db('mydb');
const collection = db.collection('users');

// Insert a new user into the "users" collections.
collection
  .insertOne({ name: "Arkadian", age: "25" })
  .then((user) => console.log("User Created Successfully: ", user))
  .catch((error) => console.log("Error: ", error));

// Fetching the "users" collections for a single document with the name "Arkadian". 
collection
  .findOne({ name: "Arkadian" })
  .then((user) => console.log(user))
  .catch((error) => console.log("Error: ", error));