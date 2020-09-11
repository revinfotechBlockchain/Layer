const mongoose = require('mongoose');

var exchangeAddresses = new mongoose.Schema({
    pairName: {
        type: String,
        required: 'This field is required.'
    },
    exchangeAddress: {
        type: String,
        required: 'This field is required.'
    },
    status: {
        type: String,
        required: 'This field is required.'
    }
});

mongoose.model('exchangeAddresses', exchangeAddresses);