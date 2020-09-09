const mongoose = require('mongoose');

var exchangeAddresses = new mongoose.Schema({
    address: {
        type: String,
        required: 'This field is required.'
    },
    status: {
        type: Boolean,
        required: 'This field is required.'
    }
});

mongoose.model('exchangeAddresses', exchangeAddresses);