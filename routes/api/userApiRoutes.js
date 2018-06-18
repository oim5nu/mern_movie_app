const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
// const validateRegisterInput = require('../../validation/register');
// const validateLoginInput = require('../.../validation/login');

// Load User model
const UserModel = require('../../models/userModel');

// @route GET api/users/test
// @desc Tests users route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'User Works'}));

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
  const userObj = req.body.user;
  //const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  //if (!isValid) {
  //  return res.status(400).json(errors);
  //}

  UserModel.findOne({ email: userObj.email })
    .then(user => {
      if (user) {
        errors.email = 'Email already exists';
        return res.status(400).json(errors).redirect('/register');
      } else {
        const newUser = new UserModel(userObj);

        newUser
          .save()
          .then(user = res.json(user))
          .catch(err => console.log(err));
      }
    });  
});

module.exports = router;


