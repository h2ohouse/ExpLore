const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/user");

// @route GET api/users/ChacterName
// @access Public

router.get("/character/:id", (req, res) =>{
  //console.log(res);
  User.findById({_id: req.params.id }).then(user => {
      console.log(user);
      res.json(user)
   
  })
  .catch(err => res.status(422).json(err));
})
// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  // console.log("user.js ln 20", req.body)
  const { errors, isValid } = validateRegisterInput(req.body);
  console.log("error ", errors, "isValid ",typeof{isValid});
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }


  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      //console.log("ln 30",user);
      return res.status(200).json({ email: "Email already exists"

    })} else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
            //console.log(user);
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.put("/login", (req, res) => {
  // Form validation
  console.log("user.js ln 60", req.body)
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // console.log(user);
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        console.log(user.email, user.loggedin);
        User.findByIdAndUpdate({_id: user._id},{loggedin: true}).then(function(){
          // res.json(user);
          console.log('line 98', user);
        })
        
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              userId: user._id,
              success: true,
              token: "Bearer " + token,
              
            });
            console.log(token)
            
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;