const mongoose = require('mongoose');
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

module.exports = Product;
