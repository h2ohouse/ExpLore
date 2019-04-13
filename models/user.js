var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // email for auth
  email: {
    type: String,
    required: true,
    unique: true
  },
    // pw for auth
  password: {
    type: String,
    required: true,
    unique: true
  },
    // starts character information
  name: {
    type: String,
    required: true
  },
  lives: {
    type: Number,
    // required: true
  },
  res: {
    type: Number,
    // required: true
  },
  score: {
    type: Number,
    // required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;