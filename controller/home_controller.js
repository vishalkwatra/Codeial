module.exports.home = function(req,res){
    return res.end('<h1>Express is up for Codeial</h1>');
}

module.exports.second_home = function(req,res){
    return res.send('<h1>Second home action</h1>');
}

//module.exports.actionName = function(req,res){}