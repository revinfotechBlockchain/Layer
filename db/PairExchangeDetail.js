const mongoose = require('mongoose');

var PairExchangeDetail = new mongoose.Schema({
    pairName: {
        type: String,
        required: 'This field is required.'
    },
    data: {
        type: String,
        required: 'This field is required.'
    },
    status: {
        type: Boolean,
        required: 'This field is required.'
    }
});

mongoose.model('PairExchangeDetail', PairExchangeDetail);