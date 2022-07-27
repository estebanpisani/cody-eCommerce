const Event = require('../models/event');

const eventControllers = {
    getEvents: async (req, res) => {
        let events;
        let error = null;
        try {
            events = await Event.find();
        } catch (err) {
            error = err;
        }

        res.json(
            {
                response: error ? 'Error al solicitar eventos.' : { events },
                success: error ? false : true,
                error: error
            }
        )
    },
    getEventById: async (req, res) => {
        const id = req.params.id;
        let event;
        let error = null;
        try {
            event = await Event.findOne({ _id: id }).populate("comments.user", { firstName: 1, image: 1 });
        } catch (err) {
            error = err;
            console.log(error);
        }

        res.json(
            {
                response: error ? 'Error al solicitar información del evento.' : { event },
                success: error ? false : true,
                error: error
            }
        )
    },
    addEvent: async (req, res) => {
        const { name, description, authors, images, price, limit, date, categories, tags, attendance, likes, comments } = req.body
        let event;
        let error = null;
        try {
            event = await new Event({
                name: name,
                description: description,
                authors: authors,
                categories: categories,
                images: images,
                price: price,
                limit: limit,
                date: date,
                tags: tags,
                attendance: attendance,
                likes: likes,
                comments: comments
            }).save();
        } catch (err) {
            error = err;
            console.log(error);
        }

        res.json(
            {
                response: error ? 'Error al crear evento' : event,
                success: error ? false : true,
                error: error
            }
        )
    },
    modifyEvent: async (req, res) => {
        const id = req.params.id;
        let eventReq = req.body;
        let eventDB;

        let error = null;
        if (req.user.role === 'admin') {
            try {
                eventDB = await Event.findOneAndUpdate({ _id: id }, eventReq, { new: true });
            } catch (err) {
                error = err;
                console.log(error);
            }

            res.json(
                {
                    response: error ? `Error al modificar ${eventReq.name}.` : eventDB,
                    success: error ? false : true,
                    message: true ? 'Evento modificado exitosamente' : 'Se ha producido un error. Por favor, intente nuevamente.',
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
            );
        }
    },
    deleteEvent: async (req, res) => {
        const id = req.params.id;
        let event;
        let error = null;

        if (req.user.role === 'admin') {
            try {
                event = await Event.findOneAndDelete({ _id: id });
            } catch (err) {
                error = err;
                console.log(error);
            }

            res.json(
                {
                    response: error ? 'Error al eliminar el evento' : event,
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
            );
        }
    },
    likeDislike: async (req, res) => {
        const id = req.params.id
        const user = req.user.id

        await Event.findOne({ _id: id })
            .then((event) => {
                if (event.likes.includes(user)) {
                    Event.findOneAndUpdate({ _id: id }, { $pull: { likes: user } }, { new: true })
                        .then((response) => res.json({ success: true, response: response.likes }))
                        .catch((error) => console.log(error))
                } else {
                    Event.findOneAndUpdate({ _id: id }, { $push: { likes: user } }, { new: true })
                        .then((response) => res.json({ success: true, response: response.likes }))
                        .catch((error) => console.log(error))
                }
            })
            .catch((error) => res.json({ success: false, response: error }))
    },
    bookingYesNo: async (req, res) => {
        const id = req.params.id
        const user = req.user.id

        await Event.findOne({ _id: id })
            .then((event) => {
                if (event.attendance.includes(user)) {
                    Event.findOneAndUpdate({ _id: id }, { $pull: { attendance: user } }, { new: true })//PULL QUITA, SACA
                        .then((response) => res.json({ success: true, response: response.attendance }))
                        .catch((error) => console.log(error))
                } else {
                    Event.findOneAndUpdate({ _id: id }, { $push: { attendance: user } }, { new: true })//PUSH AGREGA
                        .then((response) => res.json({ success: true, response: response.attendance }))
                        .catch((error) => console.log(error))
                }
            })
            .catch((error) => res.json({ success: false, response: error }))
    }
}

module.exports = eventControllers;