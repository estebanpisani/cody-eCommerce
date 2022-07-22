const Router = require('express').Router();
const passport = require('./config/passport');

const productControllers = require('./controllers/productControllers');
const eventControllers = require('./controllers/eventControllers');
const commentsControllers = require('./controllers/commentsControllers')

const {getEvents, getEventById, addEvent, modifyEvent, deleteEvent, likeDislike, bookingYesNo} = eventControllers;
const {addComment, modifiComment, deleteComment } = commentsControllers;
const userControllers = require('./controllers/userControllers')
const { getProducts, addProduct, getProductById, modifyProduct, deleteProduct, buyProducts } = productControllers;

const { signUp, signIn, verifyMail, verifyToken, getUsers, getUserById, modifyUser, deleteUser } = userControllers;

// Products Routes
Router.route('/products')
    .get(getProducts)
    .post(addProduct);

Router.route('/products/:id')
    .get(getProductById)
    .put(modifyProduct)
    .delete(deleteProduct);

Router.route('/products/buy')
    .post(buyProducts);

// Router.route("/addDeleteProduct/:id").put(passport.authenticate("jwt", {session:false}), addDeleteProduct);

// Events Routes
Router.route('/events')
    .get(getEvents)
    .post(addEvent);

Router.route('/events/:id')
    .get(getEventById)
    .put(modifyEvent)
    .delete(deleteEvent);

//User Routes
Router.route('/auth/signUp')
    .post(signUp)
Router.route('/auth/signIn')
    .post(signIn)

Router.route('/auth/profile')
    .get(getUserById)
    .put(modifyUser)

Router.route('/auth/SignInToken')
    .get(passport.authenticate('jwt', { session: false }), verifyToken);

Router.route('/auth/verify/:string')
    .get(verifyMail);

Router.route('/admin/users')
    .get(getUsers)
Router.route('/admin/users/:id')
    .put(modifyUser)
    .delete(deleteUser)

// LIKE-DISLIKE ROUTES
Router.route("/events/like/:id")
.put(passport.authenticate("jwt", {session: false}),likeDislike)

// BOOKING ROUTES
Router.route("/events/attendance/:id")
.put(passport.authenticate("jwt", {session: false}),bookingYesNo)

//COMMENTS ROUTES
Router.route('/events/comment')
.post(passport.authenticate('jwt',{ session: false }),addComment)


Router.route('/events/comment/:id')
.post(passport.authenticate('jwt',{ session: false }),deleteComment)
.put(passport.authenticate('jwt',{ session: false }),modifiComment)

module.exports = Router;