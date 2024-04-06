const mongoose = require('mongoose');
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

module.exports = Order;
