const express = require('express');
const mongoose = require('mongoose');


const app = express();

const uri = 
mongoose.connect('mongodb+srv://dilshanamarasinghe049:HD9oGQgTZtvHi4YG@cluster1.lqorvvt.mongodb.net/', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});


const productSchema = new mongoose.Schema({
  Productcategory_id: mongoose.Schema.Types.ObjectId,
  Subcategory_resId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  Price: {
    type: Number,
    get: (price) => {
      // Format price to include two decimal places
      return price.toFixed(2);
    }
  },
  Description: String,
  Image_url: String

});

const Product = mongoose.model('IOS-CW', productSchema, 'Products'); 

// Function to insert initial product data
async function insertInitialData() {
  try {
      // Check if there are any existing products
      const count = await Product.countDocuments();
      if (count === 0) {
          // Insert initial products
          await Product.insertMany([
              { Product_name: 'Womancasualdress', Subcategory_resId: '66059a107bc973ebf566537d', Price: 1500.00, Description: 'Women casual dress with linen lining',Image_url: '/women.jp'},
              { Product_name: 'Womanprintedfloraldress', Subcategory_resId: '66059a107bc973ebf566537e', Price: 1700.00, Description: 'Women printed dress with embeded pockets',Image_url: '/women.jp'},
              { Product_name: 'Womannewtop', Subcategory_resId: '66059a107bc973ebf566537f', Price: 2500.00, Description: 'Women new top with plain text',Image_url: '/women.jp'},
             
          ]);
          console.log('Initial product data inserted successfully.');
      }
  } catch (error) {
      console.error('Error inserting initial product data:', error);
  }
}

// Insert initial data when server starts
async function startServer() {
  try {
      await insertInitialData();
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
      });
  } catch (error) {
      console.error('Error starting server:', error);
  }
}

startServer();

/*

app.get('/', async (req, res) => {
    try {
      const snapshot = await Product.find();
      const responseData = { "Products": snapshot };
     res.json(responseData);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Error fetching products' });
    }
  });

  */
  
  
  
  
  
  // Your existing /data endpoint to retrieve products (GET)
  // This endpoint remains unchanged
  
  // Start the server

  /*
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
  });
  */