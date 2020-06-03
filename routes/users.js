const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => res.send('You are regsitering as a user'));
router.get('/auth', (req, res) => res.send('You are authenticating as a user'));
router.get('/me', (req, res) => res.send('This is my profile'));
router.get('/validate', (req, res) => res.send('Validating token'));

module.exports = router;