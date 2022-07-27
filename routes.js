const Router = require('express').Router();
const passport = require('./config/passport');

const userValidator = require('./validators/userValidator')
const productValidator = require('./validators/productValidator')
const eventValidator = require('./validators/eventValidator')

const productControllers = require('./controllers/productControllers');
const eventControllers = require('./controllers/eventControllers');
const commentsControllers = require('./controllers/commentsControllers')
const userControllers = require('./controllers/userControllers')

const { getEvents, getEventById, addEvent, modifyEvent, deleteEvent, likeDislike, bookingYesNo } = eventControllers;
const { addComment, modifyComment, deleteComment } = commentsControllers;
const { getProducts, addProduct, getProductById, modifyProduct, deleteProduct, buyProducts } = productControllers;
const { signUp, signIn, verifyMail, verifyToken, getUsers, getUserById, modifyUser, deleteUser } = userControllers;

// Products Routes
Router.route('/products')
    .get(getProducts)
    .post(passport.authenticate('jwt', { session: false }),addProduct);

Router.route('/products/:id')
    .get(getProductById)
    .put(passport.authenticate('jwt', { session: false }), modifyProduct)
    .delete(passport.authenticate('jwt', { session: false }), deleteProduct);

Router.route('/products/buy')
    .post(passport.authenticate('jwt', { session: false }), buyProducts);

// Events Routes
Router.route('/events')
    .get(getEvents)
    .post(passport.authenticate('jwt', { session: false }), addEvent);

Router.route('/events/:id')
    .get(getEventById)
    .put(passport.authenticate('jwt', { session: false }), modifyEvent)
    .delete(passport.authenticate('jwt', { session: false }), deleteEvent);

Router.route("/events/like/:id")
    .put(passport.authenticate("jwt", { session: false }), likeDislike)

Router.route("/events/attendance/:id")
    .put(passport.authenticate("jwt", { session: false }), bookingYesNo)

Router.route('/events/comment')
    .post(passport.authenticate('jwt', { session: false }), addComment)

Router.route('/events/comment/:id')
    .post(passport.authenticate('jwt', { session: false }), deleteComment)
    .put(passport.authenticate('jwt', { session: false }), modifyComment)

//User Routes
Router.route('/auth/signup')
    .post(signUp)
Router.route('/auth/signin')
    .put(signIn)

Router.route('/auth/profile/:id')
    .get(getUserById)
    .put(passport.authenticate('jwt', { session: false }), modifyUser)
Router.route('/auth')
    .get(passport.authenticate('jwt', { session: false }), verifyToken);
Router.route('/auth/verify/:string')
    .get(verifyMail);

//Admin Routes
Router.route('/admin/users')
    .get(passport.authenticate('jwt', { session: false }), getUsers)
Router.route('/admin/users/:id')
    .put(passport.authenticate('jwt', { session: false }), modifyUser)
    .delete(passport.authenticate('jwt', { session: false }), deleteUser)

module.exports = Router;