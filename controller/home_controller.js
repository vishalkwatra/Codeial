module.exports.home = function(req,res){
    console.log(req.cookies);
    res.cookie('user_id',25);
    // return res.end('<h1>Express is up for Codeial</h1>');
    return res.render('home', {
        title: "Home"
    });
}

module.exports.second_home = function(req,res){
    return res.send('<h1>Second home action</h1>');
}

//module.exports.actionName = function(req,res){}