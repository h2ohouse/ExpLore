const mongoose = require('mongoose');
const URI = require('../view/config');


//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || URI);

// connects our back end code with the db
mongoose.connect(
  URI,
  { useNewUrlParser: true }
);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Established mongoose default connection');
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});