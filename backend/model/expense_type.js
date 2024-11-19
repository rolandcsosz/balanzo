const Schema = require('mongoose').Schema;
const db = require('../database/db');

const expenseTypeSchema = new Schema({
    name: String,
}, {
    collection: "expense_types",
    versionKey: false
});

const ExpenseType = db.model('ExpenseTypes', expenseTypeSchema);

module.exports = ExpenseType;
