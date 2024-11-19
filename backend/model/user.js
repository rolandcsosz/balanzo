const Schema = require('mongoose').Schema;
const db = require('../database/db');

const userSchema = new Schema({
    email: String,
    password: String
}, {
    collection: "users",
    versionKey: false
});

const User = db.model('Users', userSchema);

module.exports = User;
