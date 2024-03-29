const { ObjectId } = require('mongodb');
const client = require('../config/database');

async function getAllProducts() {
  try {
    await client.connect();
    const database = client.db('test');
    const collection = database.collection('Products');
    return await collection.find({}).toArray();
  } catch (error) {
    throw error;
  }
}



async function getProductById(productId) {
  try {
    await client.connect();
    const database = client.db('test');
    const collection = database.collection('Products');
    return await collection.findOne({ _id: new ObjectId(productId) }); // Use new ObjectId(productId)
  } catch (error) {
    throw error;
  }
}

async function getProductByName(Product_name) {
  try {
    await client.connect();
    const database = client.db('test');
    const collection = database.collection('Products');
    return await collection.findOne({ Product_name: Product_name}); // Assuming name is the field for product name
  } catch (error) {
    throw error;
  }
}


async function getProductByCategoryName(Category_name) {
  try {
    await client.connect();
    const database = client.db('test');
    const collection = database.collection('Category');
    return await collection.findOne({ Category_name: Category_name}); // Assuming name is the field for product name
  } catch (error) {
    throw error;
  }
}

// productModel.js

async function getProductByCategoryNameWithSubcategories(Category_name) {
  try {
    await client.connect();
    const database = client.db('test');
    const categoryCollection = database.collection('Category');
    const subcategoryCollection = database.collection('Subcategory');

    // Find the category
    const category = await categoryCollection.findOne({ Category_name: Category_name });

    if (!category) {
      return null; // Return null if category not found
    }

    // Find subcategories for the given category_id
    const subcategories = await subcategoryCollection.find({ Category_id: category.Category_id }).toArray();

    return { category, subcategories }; // Return both category and subcategories
  } catch (error) {
    throw error;
  }
}

//Get Product details using subcategory name
async function getProductBySubCategoryNameWithProducts(
  Subcategory_name) {
  try {
    await client.connect();
    const database = client.db('test');
    const subcategoryCollection = database.collection('Subcategory');
    const productCollection = database.collection('Products');

    // Find the category
    const subcategory = await subcategoryCollection.findOne({ Subcategory_name: Subcategory_name });

    if (!subcategory) {
      return null; // Return null if category not found
    }

    // Find subcategories for the given category_id
    const products = await productCollection.find({ Subcategory_resId: subcategory._id }).toArray();



    return { subcategory, products }; // Return both category and subcategories
  } catch (error) {
    throw error;
  }
}


async function getAllProductsByCategory(Category_name) {
  try {
      await client.connect();
      const database = client.db('test');
      const categoryCollection = database.collection('Category');
      const subcategoryCollection = database.collection('Subcategory');
      const productCollection = database.collection('Products');

      // Find the category
      const category = await categoryCollection.findOne({ Category_name });

      if (!category) {
          return null; // Return null if category not found
      }

      // Find subcategories for the given category_id
    //  const subcategories = await subcategoryCollection.find({ Category_id: category._id }).toArray();
    //const subcategories = await subcategoryCollection.find({ Category_id: category._id });
   const subcategories = await subcategoryCollection.find({ Category_id: category._id }).toArray();



   const products = await productCollection.find({ Subcategory_id: subcategories._id }).toArray();

 

   return { category, products };
  } catch (error) {
      throw error;
  }
}





module.exports = {
  getAllProducts,
  getProductById,
  getProductByName,
  getProductByCategoryName,
  getProductByCategoryNameWithSubcategories,
  getAllProductsByCategory,
  getProductBySubCategoryNameWithProducts,

};
