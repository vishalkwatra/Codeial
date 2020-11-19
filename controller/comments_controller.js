const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = function (req, res) {
    Post.findById(req.body.post, function (err, post) {
        if (err) {
            req.flash('error', err);
        }
        if (post) {
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            }, function (err, comment) {
                post.comments.push(comment);
                post.save();

                if (req.xhr) {
                    return res.status(200).json({
                        data: {
                            comment: comment,
                            post: post
                        },
                        message: 'Comment created!'
                    });
                }

                req.flash('success', 'Comments are added!');
                res.redirect('/');

            })
        }
    });
}

module.exports.destroy = function (req, res) {
    Comment.findById(req.params.id, function (err, comment) {
        if (comment.user == req.user.id) {
            let postId = comment.post;

            comment.remove();

            Post.findByIdAndUpdate(postId, { $pull: { comments: req.params.id } }, function (err, post) {

                if (req.xhr) {
                    return res.status(200).json({
                        data: {
                            comment_id: req.params.id
                        },
                        message: "Comment deleted"
                    });
                }

                req.flash('success', 'Comment was deleted');
                return res.redirect('back');
            });
        } else {
            req.flash('error', 'This Comment can not be deleted!!');
            return res.redirect('back');
        }
    });
}
