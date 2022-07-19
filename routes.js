const Router = require('express').Router();
const productControllers = require('./controllers/productControllers');
const {getProducts, addProduct, getProductById, modifyProduct, deleteProduct} = productControllers;

// Products Routes
Router.route('/products')
.get(getProducts)
.post(addProduct);

Router.route('/products/:id')
.get(getProductById)
.put(modifyProduct)
.delete(deleteProduct);

module.exports = Router;