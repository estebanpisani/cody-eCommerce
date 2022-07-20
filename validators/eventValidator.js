const joi = require('joi');

const eventValidator = (req, res, next) => {

    const schema = joi.object({
        name: joi.string()
            .required()
            .messages({
                'string.empty': 'Por favor, ingrese un nombre para el evento.',
            }),
        description: joi.string()
            .max(500)
            .messages({
                'string.max': 'La descripción alcanzó el límite de caracteres (500).'
            }),
        category: joi.string()
            .required()
            .messages({
                'string.empty': 'Por favor, ingrese una categoría para el evento.',
            }),
        date: joi.string()
            .isoDate()
            .messages({
                'string.isoDate': 'Formato de fecha inválido.'
            }),
        limit: joi.number()
        .integer()
        .required()
        .messages({
            'number.required': 'Por favor, selecciones la capacidad máxima de asistencia.'
        }),
        attendance: joi.array()
            .max(joi.ref('limit'))
            .messages({
                'array.max': 'Ya no quedan lugares disponibles para este evento.'
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

module.exports = eventValidator;