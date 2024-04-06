const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
  Category_name: { type: String, required: true },
});

const Category = mongoose.model('Category', categoriesSchema);

module.exports = Category;
