const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/api/users");
const app = express();
const passport = require("passport");
var logger = require("morgan");
const PORT = process.env.PORT || 3000;

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/gamedb";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());


app.use(passport.initialize());
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(
//     session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
//   );
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport.js")(passport);

//Use morgan logger for logging requests
app.use(logger("dev"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});