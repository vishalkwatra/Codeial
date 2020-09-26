const express = require('express');
const router = express.Router();

const usersController = require('../controller/users_controller');

router.get('/profile', usersController.profile);
router.get('/LinkedInProfile', usersController.profileLinkedIn);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);

module.exports = router;