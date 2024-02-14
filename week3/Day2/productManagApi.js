const express = require('express');
const products = require('./products');
const { log } = require('console');
const app = express();
const port = 3000;
app.use(express.json());
// GET /products: This route should return a list of all products.
app.get('/products', (req, res) => {
  // to respond to the request.
  res.send(products);
});
// GET /products/search: This route should allow users to search for products based on query parameters: q, minPrice, maxPrice.
app.get('/products/search', (req, res) => {
  const minPrice = parseFloat(req.query.min);
  const maxPrice = parseFloat(req.query.max);
  const searchProduct = products.filter((Prod) => {
    return minPrice <= Prod.price && Prod.price <= maxPrice;
  });
  res.send(searchProduct);
});

// POST /products: This route should allow users to create a new product.
app.post('/products', (req, res) => {
  const newProduct = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price
  };
  products.push(newProduct);
  console.log(newProduct);
  res.json('Product Added successfully!');
});
// PUT /products/:id: This route should allow users to update the details of a specific product.
app.put("/products/:id", (req, res) => {
  const productId = req.params.id;
  const name = req.body.name;
  const price = req.body.price;
  products.forEach((updatedProduct) => {
    if (updatedProduct.id == productId) {
      updatedProduct.name = name;
      updatedProduct.price = price;
      console.log(products);
      res.send("Product updated successfully");
    }
  });
});
// DELETE /products/:id: This route should allow users to delete a specific product.
app.delete("/products/:id", (req, res) => {
  const productId = req.params.id;
  const index = products.findIndex((elem) => elem.id == productId);

  if (index !== -1) {
    products.splice(index, 1);
    console.log(products);
    res.send("Product deleted successfully");
  } else {
    res.status(404).send("Product not found");
  }
});

// GET /products/:id: This route should return the details of a specific product identified by its ID
app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const result = products.filter((prod) => {
        return prod.id == id;
    });
    res.send(result);
});

//   to launch a server
app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`);
});
