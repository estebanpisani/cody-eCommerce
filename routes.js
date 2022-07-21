const Router = require('express').Router();
const productControllers = require('./controllers/productControllers');
const eventControllers = require('./controllers/eventControllers');
const userControllers = require('./controllers/userControlers')
const {getProducts, addProduct, getProductById, modifyProduct, deleteProduct} = productControllers;
const {getEvents, getEventById, addEvent, modifyEvent, deleteEvent} = eventControllers;
const {signIn, signUp} = userControllers

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

//User Routes
Router.route('/signUp')
.post(signUp)

Router.route('/signIn')
.post(signIn)
module.exports = Router;