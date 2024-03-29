const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

/**
 * @openapi
 * /products:
 *   get:
 *     summary: Retrieve products from MongoDB
 *     description: Retrieve a list of products from the MongoDB "products" collection
 *     responses:
 *       200:
 *         description: A list of products
 */
router.get('/', productController.getAllProducts);


/**
 * @openapi
 * /products/{id}:
 *   get:
 *     summary: Retrieve a product by ID from MongoDB
 *     description: Retrieve a product by its ID from the MongoDB "products" collection
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the product to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested product
 *       404:
 *         description: Product not found
 */
router.get('/:id', productController.getProductById);



/**
 * @openapi
 * /products/{name}:
 *   get:
 *     summary: Retrieve a product by name from MongoDB
 *     description: Retrieve a product by its name from the MongoDB "products" collection
 *     parameters:
 *       - in: path
 *         name: name
 *         description: Name of the product to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested product
 *       404:
 *         description: Product not found
 */
router.get('/name/:Product_name', productController.getProductByName);

router.get('/category/:Category_name', productController.getProductByCategoryName);

router.get('/subcategory/:Category_name', productController.getProductByCategoryNameWithSubcategories);

router.get('/subproducts/:Category_name', productController.getAllProductsByCategory);
//Get Product details using subcategory name
router.get('/subcategoryproducts/:Subcategory_name', productController.getProductBySubCategoryNameWithProducts);




module.exports = router;
