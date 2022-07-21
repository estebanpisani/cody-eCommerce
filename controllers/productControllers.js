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
                variations: variations,
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
    buyProducts: async (req, res) => {
        // Desde front debería llegar un array de objetos que tengan id de producto y cantidad
        const productsReq = req.body;

        // if (req.user) {
        //Si el usuario está logeado, recibo sus datos desde passport:

        let productDB;
        let error = null;
        await productsReq.forEach(async (product, i) => {
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
        })
    }
    // addDeleteProduct: async (req,res) => {
    //     //console.log(req)
    //     let id = req.params.id //id del producto, donde queremos añadir o sacar la compra. llega por parametro desde axios
    //     console.log(id)
    //     let user = req.user.id //id del usuario q sale de la respuesta por passport 
    //     console.log(user)
    //     try { 
    //          let product = await Product.findOne({_id:id}) //buscamos un producto en donde el object id sea igual al id q pasamos por parametro
    //         if (product.addToCart.includes(user)) { //de este producto encontrado buscamos la propiedad addToCart y si esa propiedad incluye el usuario
    //           //si encontramos el producto lo actualizamos.
    //            Product.findOneAndUpdate({_id:id}, {$pull:{addToCart:user}}, {new:true}) //extraemos de addToCart el usuario y devolvemos el nuevo dato
    //                 .then(response => res.json({
    //                     response: response.addToCart, 
    //                     success: true,
    //                     message: "qcyo jsjajaj compranos xfi"
    //                 }))
    //                 .catch(error => console.log(error))
    //         } else { //en el caso en q no este el id del usuario dentro del array de addToCart hace lo mismo pero utilizando push (agrega el usuario)
    //             Product.findOneAndUpdate({_id:id}, {$push:{addToCart:user}}, {new:true})
    //                 .then(response => res.json({
    //                     response: response.addToCart, 
    //                     success: true,
    //                     message: "Añadido al carrito!"
    //                 }))
    //                 .catch(error => console.log(error))
    //         }
    //     } catch (error) {
    //         res.json({
    //             response: error,
    //             success: false
    //         })
    //     } 
    //   },
}

module.exports = productControllers;