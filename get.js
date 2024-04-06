const express = require('express');
const mongoose = require('mongoose');


const app = express();

const uri = 
mongoose.connect('mongodb+srv://dilshanamarasinghe049:HD9oGQgTZtvHi4YG@cluster1.lqorvvt.mongodb.net/', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});


const Schema = mongoose.Schema;




const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [

    {
      cartItemId: {
        type: Schema.Types.ObjectId,
        ref: 'newCartItem',
        required: true,
      }

    },
  ],
});

const Order = mongoose.model('Order', orderSchema);



async function insertInitialOrderData() {
  try {
    // Check if there are any existing orders
    const count = await Order.countDocuments();
    if (count === 0) {
      // Insert initial orders
      await Order.insertMany([
        {
          userId: '6610dc34883f8b8948bb235e',
          products: [
            { cartItemId: '6610de1cf2a66604c56e9603' },
            { cartItemId: '6610de1cf2a66604c56e9605' }
          ]
        },
        {
          userId: '6610dc34883f8b8948bb235f',
          products: [
            { cartItemId: '6610de1cf2a66604c56e9604' }
          ]
        }
      ]);
      console.log('Initial order data inserted successfully.');
    }
  } catch (error) {
    console.error('Error inserting initial order data:', error);
  }
}

// Call the function to insert initial order data when server starts
async function startServer() {
  try {
    await insertInitialOrderData();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();