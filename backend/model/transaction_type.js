const Schema = require('mongoose').Schema;
const db = require('../database/db');

const transactionTypeSchema = new Schema({
    name: String,
}, {
    collection: "transaction_types",
    versionKey: false
});

const TransactionType = db.model('TransactionTypes', transactionTypeSchema);

module.exports = TransactionType;
