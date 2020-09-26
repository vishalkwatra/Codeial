module.exports.profile = function(req,res){
    // res.end('<h1>User profile</h1>');
    res.render('users',{
        title: "Profile"
    });
}

module.exports.profileLinkedIn = function(req,res){
    res.end('<h1>User profile on Linked In</h1>');
}

//render the sign in page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title:"Codeial | Sign Up"
    });
}

//render the sign in page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title:"Codeial | Sign In"
    });
}