const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions))
const dbConfig = require("./app/config/db.config")
const db = require("./app/models");
const Role = db.role;
db.mongoose
    .connect(`mongodb+srv://${dbConfig.username}:${dbConfig.passwer}@cluster0-dx8rv.mongodb.net/${dbConfig.DB}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});
require('./app/routes/user.routes')(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/sender.routes')(app);
require('./app/routes/recive.routes')(app);
require('./app/routes/registparcel.router')(app);
require('./app/routes/payment.routes')(app);
require('./app/routes/assignment.routes')(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'user' to roles collection");
            });
            new Role({
                name: "delivery_staff"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'delivery_staff' to roles collection");
            });
            new Role({
                name: "registered_staff"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'registered_staff' to roles collection");
            });
            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'admin' to roles collection");
            });
        }
    });
}