// Establish a connection to a local MongoDB server running on the default port (27017).
const express = require('express');
const mongoose = require('mongoose');
const Products = require('./models/product.model');
const app = express();
app.use(express.json());

// Connect to your MongoDB database using Mongoose
mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error: ", error));
// Insert at least five sample products into the "products" 
// collection with varying names, prices, and descriptions.
const insertProducts = async (name, price, description, inStock) => {
    try {
        const newProduct = new Products ({
            name: name,
            price: price,
            description: description,
            inStock: inStock
        });

        await newProduct.save();
        console.log('products created successfully');
        console.log(newProduct);
    } catch (error) {
        console.log("products creating failed.", error);
    }
}
// insertProducts("p4", 30, "p4 with price 920usd", true);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});