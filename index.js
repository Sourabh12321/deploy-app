const express= require("express");
const {usermodel} = require("./user.model");
const {connection} = require("./db");
const {postData} = require("./routes/postMethod");
const {getData} = require("./routes/getMethod");
const {updateDelete} = require("./routes/update");
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());








app.use("/user",postData);
app.use("/data",getData);
app.use("/update",updateDelete);




app.listen(1200,async ()=>{
    try{
        await connection
        console.log("running at port 1200")
    }catch(err){
        console.log(err.message);
        console.log("something is wrong");
    }
    
})