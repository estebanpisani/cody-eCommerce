const Product = require('../models/product');

const productControllers = {
    getProducts: async (req, res) => {
        let products;
        let error = null;
        try {
            products = await Product.find();
        } catch (err) {
            error = err;
        }

        res.json(
            {
                response: error ? 'Error requesting products data' : { products },
                success: error ? false : true,
                error: error
            }
        )
    },
    getProductById: async (req, res) => {
        const id = req.params.id;
        let product;
        let error = null;
        try {
            product = await Product.findOne({ _id: id });
        } catch (err) {
            error = err;
            console.log(error);
        }

        res.json(
            {
                response: error ? 'Error requesting product data' : { product },
                success: error ? false : true,
                error: error
            }
        )
    },
    addProduct: async (req, res) => {
        const { name, description, images, price, stock, date, categories, variations } = req.body
        // console.log(req.body)
        let product;
        let error = null;
        try {
            product = await new Product({
                name: name,
                description: description,
                categories: categories,
                images: images,
                price: price,
                stock: stock,
                date: date,
                variations: variations
            }).save();
        } catch (err) {
            error = err;
            console.log(error);
        }

        res.json(
            {
                response: error ? 'Error creating product' : product,
                success: error ? false : true,
                error: error
            }
        )
    },
    modifyProduct: async (req, res) => {
        const id = req.params.id;
        // console.log(id);
        let productReq = req.body;
        // console.log(productReq);
        let productDB;
        let error = null;
        try {
            productDB = await Product.findOneAndUpdate({ _id: id }, productReq, { new: true });
        } catch (err) {
            error = err;
            console.log(error);
        }

        res.json(
            {
                response: error ? 'Error updating product' : productDB,
                success: error ? false : true,
                error: error
            }
        )
    },
    deleteProduct: async (req, res) => {
        const id = req.params.id;
        let product;
        let error = null;
        try {
            product = await Product.findOneAndDelete({ _id: id });
        } catch (err) {
            error = err;
            console.log(error);
        }

        res.json(
            {
                response: error ? 'Error removing product' : product,
                success: error ? false : true,
                error: error
            }
        )
    },
    // buyProduct: async (req, res) => {


    //     // Desde front debería llegar un array de objetos que tengan id de producto y cantidad
    //     const productsReq = req.body.products;

    //     if (req.user) {
    //         //Si el usuario está logeado, recibo sus datos desde passport:
    //         const user = {
    //             id: req.user.id,
    //             mail: req.user.mail,
    //             firstName: req.user.firstName,
    //             lastName: req.user.lastName
    //         }

    //         let productDB;
    //         let error = null;
    //         productsReq, map((product, i) => {
    //             try {
    //                 productDB = await Product.findOne({ _id: id });
    //                 if (productDB) {
    //                     if (productDB.stock > 0) {
    //                         productDB.stock = productDB.stock - 1;
    //                         await productDB.save()
    //                     } else {
    //                         res.json({
    //                             success: false,
    //                             response: { productDB },
    //                             message: `Ya no quedan unidades de ${productDB.name}`
    //                         })
    //                     }
    //                 }
    //             } catch (err) {
    //                 error = err;
    //                 console.log(error);
    //             }
    //         })
    //         try {
    //             productDB = await Product.findOne({ _id: id });
    //         } catch (err) {
    //             error = err;
    //             console.log(error);
    //         }

    //     }

    //     if (!req.err) {
    //         res.json({
    //             success: true,
    //             response: { user },
    //             message: "Bienvenido " + req.user.nameUser
    //         })
    //     } else {
    //         res.json({
    //             success: false,
    //             message: "Inicie sesión"
    //         })
    //     }
    // }
}

module.exports = productControllers;