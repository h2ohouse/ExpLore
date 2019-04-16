import axios from "axios";

export default {
  // Saves a new user to the database
  registerUser: function(newUser) {
    return axios.post("/register", newUser);
  }
};