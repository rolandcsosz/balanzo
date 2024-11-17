const Schema = require('mongoose').Schema;
const db = require('../database/db');

const transactionSchema = new Schema({
    item: String,
    amount: Number,
    date: Date,
    subcategory: {
        type: Schema.Types.ObjectId,
        ref: 'Subcategories'
    },
}, {
    collection: "transactions",
    versionKey: false
});

const Transaction = db.model('Transactions', transactionSchema);

module.exports = Transaction;
