const express = require("express");
const {todomodel} = require("../todomodel");
const {usermodel} = require("../user.model");
const jwt = require('jsonwebtoken');

const postData = express.Router();

postData.post("/register",async (req,res)=>{
    const userDetail = req.body
    try{
        const user = new usermodel(userDetail);
        await user.save();
        res.send({"msg":"User registered"})
    }catch(err){
        res.send({"msg":err.message})

    }
    
})

postData.post("/login",async (req,res)=>{
    const {email,pass} = req.body
    const token = jwt.sign({ course: 'backend' }, 'masai');
    try{
        const main = await usermodel.find({email:email,pass:pass});
        
        if(main.length<=0){
            res.send({"msg":"incorrect password"})
        }else{
            res.send({"msg":"login successfull","token":token})
        }
        

    }catch(err){
        res.send({"msg":err.message})

    }
    
})

postData.post("/addtodo",async (req,res) =>{
    const payload = req.body;
    const token = req.headers.authorization;
    try{
        jwt.verify(token,"masai",async (err,decoded) =>{
            if(decoded){
                const todo = new todomodel(payload);
                await todo.save();
                res.send({"msg":"added todo successfull"})
            }else{
                res.send({"msg":"something is wrong"})
            }
        })

    }catch(err){
        res.send({"msg":"login first"})
    }
    
})

module.exports={
    postData
}