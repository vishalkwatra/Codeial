const Post = require('../models/post');

module.exports.create = (req, res) => {
    Post.create({
        content: req.body.content,
        user: req.user._id
    }, function (err, post) {
        if (err) {
            console.log('Error in creating a post');
            return;
        }
        return res.redirect('back');
    });
}

module.exports.posts = function (req, res) {
    res.send('<h1>Posts loaded</h1>');
}