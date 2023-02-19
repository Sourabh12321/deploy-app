const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:String,
    pass:String,
    email:String,
    age:Number
},{
    versionKey:false
})

const usermodel = mongoose.model("user",userSchema);

module.exports = {
    usermodel
}