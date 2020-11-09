const express = require('express');

const router = express.Router();
const homeController = require('../controller/home_controller');

console.log('Router Loaded');

router.get('/',homeController.home);
router.get('/secondHome',homeController.second_home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile'));

module.exports = router;