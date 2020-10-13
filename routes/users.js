const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controller/users_controller');

router.get('/profile', usersController.profile);
router.get('/LinkedInProfile', usersController.profileLinkedIn);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);

router.post('/create', usersController.create);

router.post('/create-session', passport.authenticate('local', { failureRedirect: '/users/sign-in' }), usersController.createSession);

module.exports = router;