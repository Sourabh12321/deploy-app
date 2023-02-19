const express= require("express");
const {usermodel} = require("./user.model");
const {connection} = require("./db");
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("home page")
})

app.post("/register",async (req,res)=>{
    const userDetail = req.body
    try{
        const user = new usermodel(userDetail);
        await user.save();
        res.send({"msg":"User registered"})
    }catch(err){
        res.send({"msg":err.message})

    }
    
})

app.post("/login",async (req,res)=>{
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

app.get("/data",(req,res)=>{
    const token = req.headers.authorization
    jwt.verify(token, 'masai', (err, decoded) =>{
        if(decoded){
            res.send({"msg":"data is here"})
        }else{
            res.send({"msg":err.message})
        }
    });
    res.send("data..")
});

app.get("/productdata",(req,res)=>{
    res.send("product data")
});

app.get("/about",(req,res)=>{
    res.send("about")
});

app.listen(1212,async ()=>{
    try{
        await connection
        console.log("running at port 1212")
    }catch(err){
        console.log(err.message);
        console.log("something is wrong");
    }
    
})