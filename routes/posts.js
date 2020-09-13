const express = require('express');
const router = express.Router();

const posts = require('../controller/posts_controller');

router.get('/postDetails', posts.posts);

module.exports = router;
