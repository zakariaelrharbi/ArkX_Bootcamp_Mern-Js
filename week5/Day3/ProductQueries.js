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
        console.log("products creating failed.");
    }
}
//  insertProducts("Iphone 11", 1000, "Iphone 11 black 256GB battery 90%", true);
//  insertProducts("Iphone 12", 1200, "Iphone 12 red 256GB battery 80%", true);
//  insertProducts("Iphone 13", 1400, "Iphone 13 white 256GB battery 77%", true);
//  insertProducts("Iphone 14", 1600, "Iphone 14 green 256GB battery 87%", true);
//  insertProducts("Iphone 15", 1800, "Iphone 15 yellow 256GB battery 96%", true);
//  insertProducts("Sumsung A71", 800, "Sumsung A71 black 64GB battery 100%", true);
//  insertProducts("Sumsung A51", 400, "Sumsung A41 white 64GB battery 95%", true);
//  insertProducts("Sumsung A61", 800, "Sumsung A61 gray 64GB battery 94%", true);
//  insertProducts("Sumsung S22", 6800, "Sumsung S21 pink 1264GB battery 88%", true);
//  insertProducts("Sumsung S20", 40, "Sumsung S20 blue 964GB battery 90%", true);
//  insertProducts("Sumsung S8", 4800, "Sumsung S8 purple 864GB battery 92%", true);
//  insertProducts("Sumsung S23", 80, "Sumsung S23 brown 464GB battery 96%", true);
//  insertProducts("Sumsung S6", 3800, "Sumsung S6 gray 664GB battery 100%", true);
//  insertProducts("Sumsung S30", 2800, "Sumsung S30 blak 164GB battery 100%", true);


// Sort Products by Price
const SortProduct = async () => {
    try {
        const sortedproduct = await Products.find().sort({price: -1});
        console.log(sortedproduct);
    } catch (error) {
        console.log("Products sorting failed try again !", error);
    }
}
SortProduct();

// Implement pagination by limiting the results to 5 products per page.

// const paginateProduct = async () => {
//     try {
//         const pageSize = 5;
//         const pageNumber = 2;
//         const paginatedProducts = await Products.find().skip((pageNumber - 1) * pageSize).limit(pageSize);
//         console.log(paginatedProducts);  
//     } catch (error) {
//         console.log('paginate failed');
//     }
// }
// paginateProduct();

app.listen(3000, () => {
    console.log('Server started on port 3000');
});