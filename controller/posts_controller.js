const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports.create = async (req, res) => {
    try {
        let post = await Post.create({
            content: req.body.content,
            user: req.user._id
        });

        if (req.xhr) {
            return res.status(200).json({
                data: {
                    post: post
                },
                message: "Post created!"
            });
        }
        req.flash('success', 'Post published!');
        return res.redirect('back');
    } catch (err) {
        if (err) {
            req.flash('error', err);
            return res.redirect('back');
        }
    }


    // Post.create({
    //     content: req.body.content,
    //     user: req.user._id
    // }, function (err, post) {
    //     if (err) {
    //         console.log('Error in creating a post');
    //         return;
    //     }
    //     return res.redirect('back');
    // });
}


module.exports.destroy = async function (req, res) {

    try {
        let post = await Post.findById(req.params.id);

        if (post.user == req.user.id) {
            post.remove();

            await Comment.deleteMany({ post: req.params.id });

            if (req.xhr) {
                return res.status(200).json({
                    data:{
                        post_id: req.params.id
                    },
                    message: "Post deleted"
                });
            }

            req.flash('success', 'Post and its associated comments were deleted');
            return res.redirect('back');
        } else {
            req.flash('error', 'Post can not be deleted!');
            return res.redirect('back');
        }
    } catch (err) {
        if (err) {
            req.flash('error', err);
            return res.redirect('back');
        }
    }

    // Post.findById(req.params.id, function (err, post) {
    //     // .id means converting the object id into string
    //     if (post.user == req.user.id) {
    //         post.remove();

    //         Comment.deleteMany({ post: req.params.id }, function (err) {
    //             return res.redirect('back');
    //         });
    //     } else {
    //         return res.redirect('back');
    //     }
    // });
}

module.exports.posts = function (req, res) {
    res.send('<h1>Posts loaded</h1>');
}