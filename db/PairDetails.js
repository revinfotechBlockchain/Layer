const mongoose = require('mongoose');

var OrderPairsData = new mongoose.Schema({
    PairName: {
        type: Number,
        required: 'This field is required.'
    },
    Data: {
        type: Number,
        required: 'This field is required.'
    },
    Status: {
        type: Boolean,
        required: 'This field is required.'
    },

});

mongoose.model('OrderPairsData', OrderPairsData);