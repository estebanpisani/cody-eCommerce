const Router = require('express').Router();
const productControllers = require('./controllers/productControllers');
const {getProducts, addProduct} = productControllers;

// Products Routes
Router.route('/products')
.get(getProducts)
.post(addProduct);

Router.route('/products/:id')
.get(productControllers.getProductById)
.put(productControllers.modifyProduct)
.delete(productControllers.deleteProduct);

module.exports = Router;