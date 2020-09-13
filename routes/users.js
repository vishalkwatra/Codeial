const express = require('express');
const router = express.Router();

const usersController = require('../controller/users_controller');

router.get('/profile', usersController.profile);
router.get('/LinkedInProfile', usersController.profileLinkedIn);

module.exports = router;