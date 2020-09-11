const mongoose = require('mongoose');

var allTransactions = new mongoose.Schema({
    transactionType: {
        type: String,
        required: 'This field is required.'
    },
    data: {
        type: Object,
        required: 'This field is required.'
    },
    status: {
        type: String,
        required: 'This field is required.'
    }
});

mongoose.model('allTransactions', allTransactions);