const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = async function (req, res) {
    console.log(req.cookies);

    try {
        let posts = await Post.find({})
            .sort('-createdAt')
            .populate('user')
            .populate({ path: 'comments', options: { sort: ['-createdAt'] }, populate: { path: 'user' } });

        let users = await User.find({});

        return res.render('home', {
            posts: posts,
            title: "Home",
            all_users: users
        });
    } catch (err) {
        console.log('Error', err);
        return;
    }


    // Post.find({
    //     user: req.user._id 
    // },function(err, posts){
    //     return res.render('home', {
    //         posts: posts,
    //         title: "Home"
    //     });    
    // });

    // Post.find({})
    //     .populate('user')
    //     .populate({
    //         path: 'comments',
    //         populate: {
    //             path: 'user'
    //         }
    //     })
    //     .exec(function (err, posts) {

    //         User.find({}, function(err, users){
    //             return res.render('home', {
    //                 posts: posts,
    //                 title: "Home",
    //                 all_users: users
    //             });
    //         });



    //     }
    //     );

    //    res.cookie('user_id',25);
    // return res.end('<h1>Express is up for Codeial</h1>');

}

module.exports.second_home = function (req, res) {
    return res.send('<h1>Second home action</h1>');
}

//module.exports.actionName = function(req,res){}