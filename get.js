const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://dilshanamarasinghe049:HD9oGQgTZtvHi4YG@cluster1.lqorvvt.mongodb.net/', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const productSchema = new Schema({
  categoryID: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  Id:{type: Number},
  Product_Name: { type: String, required: true },
  Description:{type: String, required: true},
  imageurl: { type: String, required: true },
  price: { type: Number, required: true },
  Availability: { type: Number, default: 1 },
  Availablesize: { type: [String], required: true },
  Availablecolor: { type: [String], required: true },
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
          categoryID: '6610cde6aba25846408452fb',
          Id: 1,
          Product_Name: 'Product 1',
          Description: 'Description of Product 1',
          imageurl: 'image_url_of_product_1',
          price: 10,
          Availablesize: ['Small', 'Medium', 'Large'],
          Availablecolor: ['Red', 'Blue', 'Green']
        },
        {
          categoryID: '6610cde6aba25846408452fc',
          Id: 2,
          Product_Name: 'Product 2',
          Description: 'Description of Product 2',
          imageurl: 'image_url_of_product_2',
          price: 20,
          Availablesize: ['Small', 'Medium'],
          Availablecolor: ['Red', 'Blue']
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
