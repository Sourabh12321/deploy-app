const mongoose = require("mongoose");
mongoose.set('strictQuery', true)

const connection = mongoose.connect("mongodb+srv://sourabhrajput:sourabhrajput@cluster0.qnbu2.mongodb.net/auth");

module.exports = {
    connection
}