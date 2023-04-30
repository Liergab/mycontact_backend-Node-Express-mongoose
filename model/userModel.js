
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const  userSchema =  new Schema({
    username: {
        type:String,
        required:[true, "Please add  Username"]
    },

    email: {
        type:String,
        required:[true, "Please add user Email"],
        unique:[true, "Email Address is already taken"]
    },
    password:{
        type:String,
        required:[true, "Please add user password"]
    }

}, {versionKey:false, timestamp:true});

module.exports = mongoose.model("User", userSchema)
 
