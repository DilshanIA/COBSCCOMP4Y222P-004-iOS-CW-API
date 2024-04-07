const SubCategory = require('../models/subcategoryModel');
require('dotenv').config();

async function create(req, res) {
  try {
    const newSubCategory = await SubCategory.create(req.body);
    res.status(201).json(newSubCategory);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error._message });
  }
}

async function get(req, res) {
  try {
    const SubCategorys = await SubCategory.find({});
    res.status(201).json(SubCategorys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getbyid(req, res) {
  const id = req.params.id;
  try {
    const subCategory = await SubCategory.findById(id);
    if (!subCategory) {
      return res.status(404).json({ message: 'subcategory not found' });
    }
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function remove(req, res) {
  const id = req.params.id;
  try {
    const subCategory = await SubCategory.findByIdAndDelete(id);
    if (!subCategory) {
      return res.status(404).json({ message: 'subCategory not found' });
    }
    res.status(200).json({ message: 'subCategory deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// async function update(req, res) {
//   const id = req.params.id;
//   const updatedProductData = req.body;

//   try {
//     const product = await Product.findByIdAndUpdate(id, updatedProductData, {
//       new: true,
//     });
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

// async function getbycatid(req, res) {
//   try {
//     const id = req.params.id;
//     const items = await Product.find({ categoryID: id }).exec();

//     if (items.length > 0) {
//       res.status(200).json(items);
//     } else {
//       res.status(404).send('Items not found');
//     }
//   } catch (error) {
//     console.error('Error finding items by category ID:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

module.exports = {
  get: get,
  getbyid: getbyid,
  create: create,
  remove: remove,
//   update: update,
//   getbycatid: getbycatid,
};
