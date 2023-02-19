const mongoose = require("mongoose");
mongoose.set('strictQuery', true)

const connection = mongoose.connect("mongodb+srv://sourabhrajput:sourabhrajput@cluster0.qnbu2.mongodb.net/todo");

module.exports = {
    connection
}