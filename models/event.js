const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        description: { type: String, require: false },
        authors: [{ type: String, require: false }],
        images: [{ type: String, require: false }],
        price: { type: Number, require: true, default: 0 },
        limit: { type: Number, require: true, default: 1 },
        attendance: [{ type: mongoose.Types.ObjectId, ref: 'users', require: false }],
        date: {
            type: Date, min: Date(), default: Date(), require: false
        },
        category: { type: String, require: false },
        tags: [{ type: String, require: false }],
        likes: [{ type: mongoose.Types.ObjectId, ref: 'users', require: false }],
        comments: [{
            comment: { type: String },
            user: { type: mongoose.Types.ObjectId, ref: 'users' }
        }]
    }
)
const Event = mongoose.model('events', eventSchema);

module.exports = Event;