module.exports.profile = function(req,res){
    // res.end('<h1>User profile</h1>');
    res.render('users',{
        title: "Profile"
    });
}

module.exports.profileLinkedIn = function(req,res){
    res.end('<h1>User profile on Linked In</h1>');
}