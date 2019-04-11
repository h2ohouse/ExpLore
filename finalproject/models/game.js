import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    // General name
  name: {
    type: String,
    required: true
  },
    // location marker
  lat: {
    type: Integer,
    required: true
  },
    // location marker
  long: {
    type: Integer,
    required: true
  },
    //time allowed to move between locations   
  travelTime: {
    type: Integer,
    required: true
  },
  monsterName: {
    type: String,
    required: true
  },
//   perhaps seed this with a json file as well?
  monsterImage: {
    type: String,
    required: true
  },
//   Monster hp needs to be seeded as 16,32,64,128
  monsterHP: {
    type: Integer,
    required: true
  },
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;