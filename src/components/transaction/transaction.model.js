const mongoose = require('mongoose');

const { Schema } = mongoose;

const TransactionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('transaction', TransactionSchema);
