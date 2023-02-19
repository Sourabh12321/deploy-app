const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    name:String,
    task:Boolean
},{
    versionKey:false
})

const todomodel = mongoose.model("todo",todoSchema);

module.exports = {
    todomodel
}