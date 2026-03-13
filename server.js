const express = require("express");
const app = express();
const DB = require("./DB");
const UACC = require("./controllers/uacc");
const bodyParser = require('body-parser');
const cors = require("cors");

app.use(express.json());
//app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

//Retrieve info about a specific driver.
app.get("/driver", cors(), (request, response) => {
    let driverid = request.query.driverid;
    DB.driverModel.findOne({DriverID: driverid}).then((result) => {
        if (result) {
            response.send(result);
            response.end();
        } else {
            response.status(404).send("Driver not Found");
        }
    });
});

app.get('/rider', (request, response) => {
    let riderid = request.query.riderid;
    DB.riderModel.find({RiderID: riderid}).then((result) => {
        if (result) {
            response.send(result);
            response.end();
        } else {
            response.status(404).send("Rider not Found");
        }
    });
});

app.post("/registerrider", (request, response) => {
    console.log(request.body);
    UACC.registerRider(request.body, function(result) {
        response.send(result);
        response.end();
    });
});

app.post("/registerdriver", (request, response) => {
    console.log(request.body);
    UACC.registerDriver(request.body, function(result) {
        response.send(result);
        response.end();
    });
});

app.listen(process.env.PORT, () => {
    console.log("Server listening on port " + process.env.PORT);
});