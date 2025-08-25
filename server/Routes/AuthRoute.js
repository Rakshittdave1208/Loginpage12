const express = require('express');
const { Signup, Login } = require('../controllers/Authcontroller');

const router = express.Router();

router.post('/signup', Signup);
router.post('/login', Login);

module.exports =router;