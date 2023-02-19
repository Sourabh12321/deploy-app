const express = require("express");
const jwt = require('jsonwebtoken');
const getData = express.Router();
const {todomodel} = require("../todomodel");

getData.get("/",(req,res)=>{
    const token = req.headers.authorization
    jwt.verify(token, 'masai', async (err, decoded) =>{
        if(decoded){
            const data = await todomodel.find();

            res.send(data)
        }else{
            res.send({"msg":err.message})
        }
    });
    
});

getData.get("/cart",(req,res)=>{
    const token = req.headers.authorization
    jwt.verify(token,"masai",(err,decoded) =>{
        if(decoded){
            res.send({"msg":"cart data is here"})
        }else{
            res.send({"msg":err.message});
        }
    })
})

getData.get("/about",(req,res)=>{
    const token = req.headers.authorization
    jwt.verify(token,"masai",(err,decoded) =>{
        if(decoded){
            res.send({"msg":"about thing is here"})
        }else{
            res.send({"msg":err.message});
        }
    })
})

module.exports = {
    getData
}