const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");


// Setting up Express App
const app = express();
const PORT = process.env.PORT || 8000;


app.use(logger("dev"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// db mongo
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})

// Creating Routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-Routes.js"));


// Starts the server to begin listening
app.listen(PORT, function() {
    console.log(`App listening on Port ${PORT}!`);
});