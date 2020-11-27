module.exports.index = function(req,res){
    return res.json(200,{
        message: "V2 version List of posts",
        posts:[]
    });
}