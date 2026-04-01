const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const riderSchema = new Schema({
    RiderID: String,
    FirstName: String,
    LastName: String,
    Username: String,
    City: String,
    Country: String,
    Phone: String,
    Email: String,
    ImageURL: String,
    Password: String
});

module.exports.riderSchema = riderSchema;