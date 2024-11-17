const Schema = require('mongoose').Schema;
const db = require('../database/db');

const mainCategorySchema = new Schema({
    name: String,
    expenseType: {
        type: Schema.Types.ObjectId,
        ref: 'ExpenseTypes'
    },
}, {
    collection: "main_categories",
    versionKey: false
});

const MainCategory = db.model('MainCategories', mainCategorySchema);

module.exports = MainCategory;
