import axios from "axios";

export default {
  // Saves a new user to the database
  registerUser: function(newUser) {
    return axios.post("/register", newUser);
  },

  //Login Registered User
  loginUser: function(loginUser){
    return axios.put("/login", loginUser)
  },

  CharacterName: function(id){
    return axios.get("/character/"+ id)
  }
};