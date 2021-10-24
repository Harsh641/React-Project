var signupModel = require('../model/signupModel');

exports.signup=function(req,res){

    let u = new signupModel({
        userId:req.body.userId,
        firstName: req.body.firstName,
        email:req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword
}) 

u.save(function(err,data){


    if(err){
        res.json({
            status:-1,
            data:err,
            msg:"Something went wrong"
        })
    }else{
        res.json({
            status:200,
            data:data,
            msg:"user save successfully"
        })        
    }
})


}

exports.authenticate = function(req,res){

}