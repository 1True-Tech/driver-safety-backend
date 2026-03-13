const DB = require("../DB");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

function registerRider(data, fn) {
    let riderid = crypto.randomBytes(8).toString('hex');
    console.log(data.password);
    let password = bcrypt.hashSync(data.password, 13);
    DB.riderModel.insertOne({RiderID: riderid, Username: data.username, Password: password, FirstName: data.firstname, LastName: data.lastname, City: data.city, Country: data.country, Phone: data.phone, Email: data.email, ImageURL: data.imageurl}).then((result) => {
        fn(result);
    });
}

function registerDriver(data, fn) {
    let driverid = crypto.randomBytes(8).toString('hex');
    console.log(data.password);
    let password = bcrypt.hashSync(data.password, 13);
    DB.driverModel.insertOne({DriverID: driverid, Username: data.username, Password: password, FirstName: data.firstname, LastName: data.lastname, City: data.city, Country: data.country, Phone: data.phone, Email: data.email, Vehicle: data.vehicle, LicensePlate: data.licenseplate, Licensed: false, ImageURL: data.imageurl}).then((result) => {
        fn(result);
    });
}

module.exports.registerRider = registerRider;
module.exports.registerDriver = registerDriver;