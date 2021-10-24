var router = require("express").Router()

var signupcontroller = require("./controller/signupcontroller")
var logincontroller = require("./controller/logincontroller")
var fp = require("./Controller/forgetpassword")
var editprofile=require("./Controller/editprofile")



router.route("/signup").post(signupcontroller.signup)
router.route("/login").post(logincontroller.login)
router.route("/forgetPassword").post(fp.forgetPassword)
router.route("/users/:userId").get(editprofile.getuserByid)
router.route("/updateUser").post(editprofile.updateUser)

module.exports = router