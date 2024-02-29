const mongoose = require('mongoose');

// Create a user schema with fields name, email, age, and a createdAt of type 
// Date with a default value set to the current date and time.


const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0},
    description: { type: String},
    inStock: { type: Boolean, default: true},
  }, {timestamps: true});

  const ProductModel = mongoose.model('Product', ProductSchema);
  module.exports = ProductModel;