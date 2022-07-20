const joi = require('joi');

const productValidator = (req, res, next) => {

    const schema = joi.object({
        name: joi.string()
            .required()
            .messages({
                'string.empty': 'Por favor, ingrese un nombre para el producto.',
            }),
        description: joi.string()
            .max(200)
            .messages({
                'string.max': 'La description alcanzó el límite de caracteres (200).'
            }),
        date: joi.string()
            .isoDate()
            .messages({
                'string.isoDate': 'Formato de fecha inválido.'
            }),
        categories: joi.array()
            .min(1)
            .messages({
                'array.min': 'Seleccione al menos una categoría para el producto.'
            }),
            images: joi.array()
            .items(joi.string().domain())
            .messages({
                'string.domain': 'URL de la imagen inválida.'
            })
    });

    const validation = schema.validate(req.body, { abortEarly: false })

    if (validation.error) {
        let messages = validation.error.details.map(error => error.message);
        return res.json({
            success: false,
            from: 'Product Validator',
            message: messages,
            details: validation.error.details
        })
    }

    next();
}

module.exports = productValidator;