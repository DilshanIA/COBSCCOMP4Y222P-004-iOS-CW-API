const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subcategoriesSchema = new Schema({
   categoryID: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
      },
  Subcategory_name: { type: String, required: true },
 // imageName: { type: String, required: true },
});

const SubCategory = mongoose.model('SubCategory', subcategoriesSchema);

module.exports = SubCategory;