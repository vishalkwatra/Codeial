const Post = require('../models/post');
module.exports.home = function (req, res) {
    console.log(req.cookies);
    // Post.find({
    //     user: req.user._id 
    // },function(err, posts){
    //     return res.render('home', {
    //         posts: posts,
    //         title: "Home"
    //     });    
    // });

    Post.find({}).populate('user').exec(function (err, posts) {
        return res.render('home', {
            posts: posts,
            title: "Home"
        });
    }
    );

    //    res.cookie('user_id',25);
    // return res.end('<h1>Express is up for Codeial</h1>');

}

module.exports.second_home = function (req, res) {
    return res.send('<h1>Second home action</h1>');
}

//module.exports.actionName = function(req,res){}