const Schema = require('mongoose').Schema;
const db = require('../database/db');

const subcategorySchema = new Schema({
    name: String,
    expenseType: {
        type: Schema.Types.ObjectId,
        ref: 'ExpenseTypes'
    },
    mainCategory: {
        type: Schema.Types.ObjectId,
        ref: 'MainCategories'
    }
}, {
    collection: "subcategories",
    versionKey: false
});

const Subcategory = db.model('Subcategories', subcategorySchema);

module.exports = Subcategory;
