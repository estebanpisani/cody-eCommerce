const Event = require('../models/event');

const eventControllers = {
    getEvents: async (req,res) => {
        let events;
        let error = null;
        try {
            events = await Event.find();
        }catch (err){
            error = err;
        }

        res.json(
            {
                response: error ? 'Error requesting events data' : {events},
                success: error ? false : true,
                error: error
            }
        )
    },
    getEventById: async (req,res) => {
        const id = req.params.id;
        let event;
        let error = null;
        try {
            event = await Event.findOne({_id:id});
        }catch (err){
            error = err;
            console.log(error);
        }

        res.json(
            {
                response: error ? 'Error requesting event data' : {event},
                success: error ? false : true,
                error: error
            }
        )
    },
    addEvent: async (req,res) => {
        const {name, description, authors, images, price, limit, date, categories, tags, attendance, likes, comments }=req.body
        // console.log(req.body)
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
        }catch (err){
            error = err;
            console.log(error);
        }

        res.json(
            {
                response: error ? 'Error creating event' : event,
                success: error ? false : true,
                error: error
            }
        )
    },
    modifyEvent: async (req,res) => {
        const id = req.params.id;
        // console.log(id);
        let eventReq = req.body;
        // console.log(eventReq);
        let eventDB;
        let error = null;
        try {
            eventDB = await Event.findOneAndUpdate({ _id:id }, eventReq, {new:true});
        }catch (err){
            error = err;
            console.log(error);
        }

        res.json(
            {
                response: error ? 'Error updating event' : eventDB,
                success: error ? false : true,
                error: error
            }
        )
    },
    deleteEvent: async (req,res) => {
        const id = req.params.id;
        let event;
        let error = null;
        try {
            event = await Event.findOneAndDelete({_id:id});
        }catch (err){
            error = err;
            console.log(error);
        }

        res.json(
            {
                response: error ? 'Error removing event' : event,
                success: error ? false : true,
                error: error
            }
        )
    }
}

module.exports = eventControllers;