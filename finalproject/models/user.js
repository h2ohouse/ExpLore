import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // email for auth
  email: {
    type: String,
    required: true
  },
    // pw for auth
  password: {
    type: String,
    required: true
  },
    // starts character information
  Name: {
    type: String,
    required: true
  },
  lives: {
    type: Integer,
    required: true
  },
  res: {
    type: Integer,
    required: true
  },
  score: {
    type: Integer,
    required: true
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;