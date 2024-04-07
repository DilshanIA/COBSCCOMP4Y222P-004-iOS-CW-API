const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://dilshanamarasinghe049:HD9oGQgTZtvHi4YG@cluster1.lqorvvt.mongodb.net/', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const productSchema = new Schema({
  subcategoryID: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory',
    required: true,
  },
  Product_name: { type: String, required: true },
  id: { type: Number, required: true },
  Description:{type: String, required: true},
  Image_url: { type: String, required: true },
  Price: { type: Number, required: true },
  Availability: { type: Number, default: 1 },
  Tags: { type: [String], required: true },
  availablesize: { type: [String], required: true },
  availablecolor: { type: [String], required: true },
});

const Product = mongoose.model('Product', productSchema);

async function insertInitialProductData() {
  try {
    // Check if there are any existing products
    const count = await Product.countDocuments();
    if (count === 0) {
      // Insert initial products
      await Product.insertMany([
        {
          subcategoryID: '6612236cc818af414b35b0e2',
          Product_name: 'Product 1',
          id: 1,
          Description: 'Description of Product 1',
          Image_url: 'image_url_of_product_1',
          Price: 10,
          Tags: ['tag1', 'tag2'],
          availablesize: ['Small', 'Medium', 'Large'],
          availablecolor: ['Red', 'Blue', 'Green']
        },
        {
          subcategoryID: '6612236cc818af414b35b0e3',
          Product_name: 'Product 2',
          id: 2,
          Description: 'Description of Product 2',
          Image_url: 'image_url_of_product_2',
          Price: 20,
          Tags: ['tag3', 'tag4'],
          availablesize: ['Small', 'Medium'],
          availablecolor: ['Black', 'White']
        },
        // Add more products as needed
      ]);
      console.log('Initial product data inserted successfully.');
    }
  } catch (error) {
    console.error('Error inserting initial product data:', error);
  }
}

// Call the function to insert initial product data when server starts
async function startServer() {
  try {
    await insertInitialProductData();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();
