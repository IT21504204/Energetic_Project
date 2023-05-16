const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const billPredictionSchema = new Schema({
    lastBill: { 
        type: Number, 
        required: true 
    },
    firstCount: {
        type: Number,
        required: true
    },
    secondCount: {
        type: Number,
        required: true
    },
    thirdCount: {
        type: Number,
        required: true
    },
    predictCount: {
        type: Number,
        required: true
    },

})


const BillPrediction = mongoose.model('BillPrediction', billPredictionSchema);

module.exports = BillPrediction;
