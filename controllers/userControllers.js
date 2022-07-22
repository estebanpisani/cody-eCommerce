const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const mailSender = require('../config/mailSender')
const jwt = require('jsonwebtoken')
const ck = require('ckey');


const userControllers = {

    signUp: async (req, res) => {
        const { firstName, lastName, email, country, image, password, from } = req.body.userData
        try {
            const user = await User.findOne({ email })
            const hashWord = bcryptjs.hashSync(password, 10)
            const verification = false;
            const role = 'user'
            const uniqueString = crypto.randomBytes(15).toString('hex')
            if (!user) {
                const newUser = await new User({
                    firstName, lastName, image, country, email, role, verification,
                    uniqueString: uniqueString,
                    password: [hashWord],
                    from: [from]
                })
                if (from === "signUpForm") {
                    await newUser.save()
                    await mailSender(email, uniqueString, firstName)
                    res.json({
                        success: true,
                        from: from,
                        message: `Revisa tu correo y finaliza tu registro!`
                    })
                } else {
                    newUser.verification = true
                    await newUser.save()
                    res.json({
                        success: true,
                        from: from,
                        message: `Te registraste de ${from}! ahora inicia sesion!`
                    })
                }
            } else {
                if (user.from.indexOf(from) !== -1) {
                    res.json({
                        success: false,
                        from: from,
                        message: `${email} ya se encuentra registrado, por favor inicie sesion!`
                    })
                } else {
                    user.password.push(hashWord)
                    user.from.push(from)
                    user.verification = true
                    await user.save()
                    res.json({
                        success: true,
                        from: from,
                        message: `Se agregó exitosamente ${from} a sus opciones de registro!`
                    })
                }
            }
        } catch (error) {
            console.log(error)
            res.json({
                success: false,
                from: from,
                message: error
            })
        }
    },
    signIn: async (req, res) => {

        console.log(req.body)
        const { email, password, from } = req.body.logedUser
        try {
            const loginUser = await User.findOne({ email })

            if (!loginUser) {
                res.json({
                    success: false,
                    from: 'no from',
                    message: `Correo o contraseña incorrectos`
                })
            } else {
                let checkedWord = loginUser.password.filter(pass => bcryptjs.compareSync(password, pass))

                if (from === "signUpForm") {
                    if (loginUser.verification) {
                        if (checkedWord.length >= 0) {
                            const user = {
                                id: loginUser._id,
                                email: loginUser.email,
                                firstName: loginUser.firstName,
                                lastName: loginUser.lastName,
                                image: loginUser.image,
                                role: loginUser.role,
                                from: loginUser.from
                            }
                            // await loginUser.save()
                            const token = jwt.sign({ id: loginUser._id }, ck.SECRET_KEY, { expiresIn: 1000 * 60 * 60 * 24 })

                            res.json({
                                response: { token, user },
                                success: true,
                                from: from,
                                message: `Bienvenido ${user.firstName}!`
                            })
                        } else {
                            res.json({
                                success: false,
                                from: from,
                                message: `Verifica tu usuario o contraseña!`
                            })
                        }
                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: `Su cuenta está inactiva, por favor verifique su cuenta.`
                        })
                    }
                } else {
                    if (checkedWord.length >= 0) {
                        const user = {
                            id: loginUser._id,
                            email: loginUser.email,
                            firstName: loginUser.firstName,
                            image: loginUser.image,
                            // role: loginUser.role,
                            from: loginUser.from
                        }
                        await loginUser.save()
                        const token = jwt.sign({ id: loginUser._id }, ck.SECRET_KEY, { expiresIn: 1000 * 60 * 60 * 24 })

                        res.json({
                            response: { token, user },
                            success: true,
                            from: from,
                            message: `Bienvenido ${user.firstName}!`
                        })
                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: `Verifica tu usuario o contraseña!`
                        })
                    }
                }
            }
        } catch (error) {
            console.log(error)
            res.json({
                success: false,
                from: from,
                message: 'ERROR'
            })
        }
    },
    verifyMail: async (req, res) => {
        const { string } = req.params
        const user = await User.findOne({ uniqueString: string })

        if (user) {
            user.verification = true
            await user.save()
            res.redirect("http://localhost:3000/signIn")
        }
        else {
            res.json({
                success: false,
                message: `El correo aun no tiene cuenta!`
            })
        }
    },
    verifyToken: (req, res) => {
        const user = {
            id: req.user.id,
            email: req.user.email,
            firstName: req.user.firstName,
            image: req.user.image,
            // role: req.user.role,
            from: "token"
        }
        if (!req.err) {
            res.json({
                success: true,
                response: { user },
                message: "Bienvenido " + req.user.nameUser
            })
        } else {
            res.json({
                success: false,
                message: "Inicie sesión"
            })
        }
    },
    unsubscribeUser: async(req, res) => {
        let user = {}
        let error = null
        let { id } = req.params
        const unsuscribe = { verification: false };
        try {
            user = await User.findOneAndUpdate({ _id: id }, unsuscribe, { new: true })
        } catch (errorDeCatcheo) {
            error = errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : 'Tu usuario ha sido eliminado de la base de datos.',
            success: error ? false : true,
            error: error
        })
    },
    getUsers: async (req, res) => {
        let users = []
        let error = null
        try {
            users = await User.find()

        } catch (errorDeCatcheo) {
            error = errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : users,
            success: error ? false : true,
            error: error
        })
    },
    getUserById: async (req, res) => {
        let oneUser = {}
        let error = null
        let { id } = req.params
        try {
            oneUser = await User.findOne({ _id: id })
        } catch (error) {
            error = error
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : oneUser,
            success: error ? false : true,
            error: error
        })
    },
    modifyUser: async (req, res) => {
        let putUser = {}
        let error = null
        let { id } = req.params
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
        }
        try {
            putUser = await User.findOneAndUpdate({ _id: id }, req.body, { new: true })
        } catch (errorDeCatcheo) {
            error = errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : putUser,
            success: error ? false : true,
            error: error
        })
    },
    deleteUser: async (req, res) => {
        let deleteUser = {}
        let error = null
        let { id } = req.params
        try {
            deleteUser = await User.findOneAndDelete({ _id: id })
        } catch (errorDeCatcheo) {
            error = errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : deleteUser,
            success: error ? false : true,
            error: error
        })
    }
}
module.exports = userControllers;