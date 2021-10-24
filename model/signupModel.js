var mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
    userId:{
        type:Number
    },
    firstName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    roleId:{
        type:mongoose.Types.ObjectId
    }
})

module.exports = mongoose.model("User", userSchema)