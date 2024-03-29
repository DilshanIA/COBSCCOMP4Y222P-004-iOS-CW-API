const productModel = require('../models/productModel');

async function getAllProducts(req, res) {
  try {
    const products = await productModel.getAllProducts();
    res.json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


/*
async function getProductById(req, res) {
    const { id } = req.params;
    try {
      const product = await productModel.getProductById(id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json({ product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  */

  async function getProductById(req, res) {
    const productId = req.params.id || req.query.id; // Check if ID is in URL params or query params
    try {
      const product = await productModel.getProductById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json({ product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async function getProductByName(req, res) {
    const Product_name = req.params.Product_name || req.query.Product_name; // Check if name is in URL params or query params
    try {
      const product = await productModel.getProductByName(Product_name);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json({ product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }


  async function getProductByCategoryName(req, res) {
    const Category_name = req.params.Category_name || req.query.Category_name; // Check if name is in URL params or query params
    try {
      const Category = await productModel.getProductByCategoryName(Category_name);
      if (!Category) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json({ Category });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async function getProductByCategoryNameWithSubcategories(req, res) {
    const Category_name = req.params.Category_name || req.query.Category_name; // Check if name is in URL params or query params
    try {
      const result = await productModel.getProductByCategoryNameWithSubcategories(Category_name);
      if (!result || !result.category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.json(result); // Return category and subcategories
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async function getProductBySubCategoryNameWithProducts(req, res) {
    const Subcategory_name = req.params.Subcategory_name || req.query.Subcategory_name; // Check if name is in URL params or query params
    try {
      const result = await productModel.getProductBySubCategoryNameWithProducts(Subcategory_name);
      if (!result || !result.subcategory) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.json(result); // Return category and subcategories
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }


  async function getAllProductsByCategory(req, res) {
    const Category_name = req.params.Category_name || req.query.Category_name; // Check if name is in URL params or query params
    try {
        const result = await productModel.getAllProductsByCategory(Category_name);
        if (!result || !result.category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(result); // Return category and its products
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
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
