const mongoose = require("mongoose");
const driverModule = require('./models/driver');
const riderModule = require('./models/rider');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

console.log(process.env.MONGODB_URI);

db.on("error", console.error.bind(console, "connection error"));

db.once("open", function(callback) {
    console.log("Connection succeeded.");
});

const driverModel = mongoose.model("Driver", driverModule.driverSchema);
const riderModel = mongoose.model("Rider", riderModule.riderSchema);

let testDriver = new driverModel({
    DriverID: '11447766HT',
    FirstName: 'Jevonne',
    LastName: 'Shaw',
    City: 'Kingston',
    Country: 'Jamaica',
    Phone: '000-0000',
    Email: 'test@test.com',
    LicensePlate: '1111 AA',
    Vehicle: 'Grey Honda Fit',
    Licensed: true
});

let testRider = new riderModel({
    RiderID: '0936TYER',
    FirstName: 'Beatrice',
    LastName: 'Williams',
    City: 'Kingston',
    Country: 'Jamaica',
    Phone: '111-1111',
    Email: 'test1@test.com'
});

//testRider.save();

//testDriver.save();

module.exports.driverModel = driverModel;
module.exports.riderModel = riderModel;