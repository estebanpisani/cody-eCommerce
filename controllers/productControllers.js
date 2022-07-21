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
        const { name, description, image, price, stock, date, categories, variations } = req.body
        // console.log(req.body)
        let product;
        let error = null;
        try {
            product = await new Product({
                name: name,
                description: description,
                categories: categories,
                image: image,
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
    buyProduct: async (req, res) => {

    }
}

module.exports = productControllers;