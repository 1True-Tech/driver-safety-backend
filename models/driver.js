const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema({
    DriverID: String,
    FirstName: String,
    LastName: String,
    City: String,
    Country: String,
    Phone: String,
    Email: String,
    LicensePlate: String,
    Vehicle: String,
    ImageURL: String,
    Licensed: Boolean
});

module.exports.driverSchema = driverSchema;