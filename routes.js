const Router = require('express').Router();
const productControllers = require('./controllers/productControllers');
const eventControllers = require('./controllers/eventControllers');
const {getProducts, addProduct, getProductById, modifyProduct, deleteProduct, } = productControllers;// addDeleteProduct
const {getEvents, getEventById, addEvent, modifyEvent, deleteEvent} = eventControllers;

// Products Routes
Router.route('/products')
.get(getProducts)
.post(addProduct);

Router.route('/products/:id')
.get(getProductById)
.put(modifyProduct)
.delete(deleteProduct);

// Router.route("/addDeleteProduct/:id").put(passport.authenticate("jwt", {session:false}), addDeleteProduct);

// Events Routes
Router.route('/events')
.get(getEvents)
.post(addEvent);

Router.route('/products/:id')
.get(getEventById)
.put(modifyEvent)
.delete(deleteEvent);

module.exports = Router;