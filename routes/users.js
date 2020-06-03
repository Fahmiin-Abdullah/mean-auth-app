const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((err, user) => {
    if (err) console.log(err);
    else res.status(200).send(user);
  });
});

router.post('/login', (req, res) =>{
  let loginData = req.body
  User.findOne({ email: loginData.email }, (err, user) => {
    if (err) console.log(err);
    else {
      if (!user) res.status(401).send('Invalid email!');
      else if (user.password !== loginData.password) res.status(401).send('Incorrect password!');
      else res.status(200).send(user);
    }
  })
});

module.exports = router;