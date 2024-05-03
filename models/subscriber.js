const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribertoChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
}); // Added closing brace here

module.exports = mongoose.model('Subscriber', subscriberSchema);