const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    confirmpassword:String,
    email: String,
    age: Number,
    jobroll: String,
    bank: String,
    accountNumber:Number

})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel