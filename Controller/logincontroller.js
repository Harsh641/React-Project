var u = require('../model/loginModel')
var mongoose = require("mongoose")

exports.login = function (req, res) {

    let email = req.body.email;
    let password = req.body.password;

    u.find({$and: [{"email":email}, {"password":password}]}, function(err, data){
        if (err) {
            res.json({
                status: -1,
                data: err,
                msg: "Something went wrong"
            })
        } else {
            res.json({
                status: 200,
                data: data,
                msg: "user save successfully"
            })
        }
    })
}