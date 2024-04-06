const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newCartItemSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  Product_Name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  size: { type: String, required: true },
  colour: { type: String, required: true },
  imageName: { type: String, required: true },
});

const newCartItem = mongoose.model('newCartItem', newCartItemSchema);

module.exports = newCartItem;
