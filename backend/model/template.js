const Schema = require('mongoose').Schema;
const db = require('../database/db');

const templateSchema = new Schema({
    name : String,
    itemName: String,
    amount: Number,
    date: Date,
    subcategory: {
        type: Schema.Types.ObjectId,
        ref: 'Subcategories'
    },
}, {
    collection: "templates",
    versionKey: false
});

const Template = db.model('Templates', templateSchema);

module.exports = Template;
