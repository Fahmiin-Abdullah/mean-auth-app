const express = require('express');
const router = express.Router();

router.get('/register', (req, res, next) => res.send('You are regsitering as a user'));
router.get('/auth', (req, res, next) => res.send('You are authenticating as a user'));
router.get('/me', (req, res, next) => res.send('This is my profile'));
router.get('/validate', (req, res, next) => res.send('Validating token'));

module.exports = router;