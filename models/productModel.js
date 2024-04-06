const mongoose = require('mongoose');
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

module.exports = Product;
