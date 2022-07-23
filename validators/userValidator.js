const joi = require('joi');

const userValidator = (req, res, next) => {

    const schema = joi.object({
        email: joi.string()
            .email({ minDomainSegments: 2 })
            .required()
            .messages({
                'string.email': 'Ingrese una dirección de email válida.',
                'string.empty': 'Por favor, ingrese su dirección de email.'
            }),
        password: joi.string()
            .min(8)
            .max(40)
            .required()
            .messages({
                'string.min': 'La contraseña debe contener al menos 8 caracteres',
                'string.max': 'La contraseña debe contener un máximo de 40 caracteres',
                'string.empty': 'Por favor, ingrese una contraseña.'
            }),
        // passwordRepeat: joi.string().required().valid(joi.ref('password')).messages({
        //     'string.empty': 'Por favor, repita su contraseña.',
        //     'any.only': 'PLas contraseñas no coinciden.'
        // }),
        firstName: joi.string()
            .required()
            .messages({
                'string.empty': 'Por favor, ingrese su nombre.'
            }),
        lastName: joi.string()
            .required()
            .messages({
                'string.empty': 'Por favor, ingrese su apellido.'
            }),
        method: joi.string()
            .required()
            .messages({
                'string.empty': 'The Registration method can\'t be empty.'
            }),
        image: joi.string()
            .allow(''),
        // country: joi.string()
        //     .required(),
        verified: joi.boolean()
    });

    const validation = schema.validate(req.body.userData, { abortEarly: false })  //abortEarly - when true, stops validation on the first error, otherwise returns all the errors found. Defaults to true.

    if (validation.error) {
        let messages = validation.error.details.map(error => error.message);
        return res.json({
            success: false,
            from: 'User Validator',
            message: messages,
            details: validation.error.details
        })
    }

    next();
}

module.exports = userValidator;