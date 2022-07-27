const Product = require('../models/product');
const buyMail = require('../config/buyMail')

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
                response: error ? 'Error al solicitar productos.' : { products },
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
                response: error ? 'Error al solicitar información del producto.' : { product },
                success: error ? false : true,
                error: error
            }
        )
    },
    addProduct: async (req, res) => {
        const { name, description, image, price, stock, date, categories, variations } = req.body
        let product;
        let error = null;
        if (req.user.role === 'admin') {
            try {
                product = await new Product({
                    name: name,
                    description: description,
                    categories: categories,
                    image: image,
                    price: price,
                    stock: stock,
                    date: date,
                    variations: variations,
                }).save();
            } catch (err) {
                error = err;
                console.log(error);
            }

            res.json(
                {
                    message: error ? 'Error al crear producto' : 'Nuevo producto agregado',
                    success: error ? false : true,
                    error: error
                }
            )
        } else {
            res.json(
                {
                    message: 'No tiene permisos para realizar esta acción.',
                    success: false,
                    error: error
                }
            )
        }
    },
    modifyProduct: async (req, res) => {
        const id = req.params.id;
        let productReq = req.body;
        let productDB;

        let error = null;

        if (req.user.role === 'admin') {
            try {
                productDB = await Product.findOneAndUpdate({ _id: id }, productReq, { new: true });
            } catch (err) {
                error = err;
                console.log(error);
            }

            res.json(
                {
                    response: error ? `Error al modificar ${productReq.name}.` : productDB,
                    success: error ? false : true,
                    error: error
                }
            );
        } else {
            res.json(
                {
                    message: 'No tiene permisos para realizar esta acción.',
                    success: false,
                    error: error
                }
            );
        }
    },
    deleteProduct: async (req, res) => {
        const id = req.params.id;
        let product;
        let error = null;

        if (req.user.role === 'admin') {
            try {
                product = await Product.findOneAndDelete({ _id: id });
            } catch (err) {
                error = err;
                console.log(error);
            }

            res.json(
                {
                    message: error ? 'Error al eliminar el producto' : "Producto eliminado",
                    success: error ? false : true,
                    error: error,

                }
            )
        } else {
            res.json(
                {
                    message: 'No tiene permisos para realizar esta acción.',
                    success: false,
                    error: error
                }
            );
        }
    },
    buyProducts: async (req, res) => {
        const productsReq = req.body.currentcart;
        const total = req.body.total;
        const email = req.user.email
        let productDB;
        let error = null;

        productsReq.forEach(async (product, i) => {
            try {
                productDB = await Product.findOne({ _id: product.id });
                if (productDB) {
                    if (productDB.stock > 0 && productDB.stock >= product.units) {
                        productDB.stock = productDB.stock - product.units;
                        await productDB.save();
                    } else {
                        console.log('Error al comprar ' + productDB.name);
                    }
                }
            } catch (err) {
                error = err;
                console.log(error);
            }
        });

        await buyMail(email, productsReq, total)
        res.json(
            {
                response: productsReq,
                success: true,
                message: 'Gracias por su compra.'
            }
        )
    }
}

module.exports = productControllers;