const express = require("express");
const {todomodel} = require("../todomodel");
const updateDelete = express.Router();
const jwt = require('jsonwebtoken');


updateDelete.patch("/update/:id", async(req, res)=>{
    const id = req.params.id;
    const payload = req.body
    const token = req.headers.authorization;
    try {
        jwt.verify(token, 'masai', async(err, decoded) => {
            if (decoded) {
                await todomodel.findByIdAndUpdate({ _id: id }, payload)
                res.send({ "msg": " Todo update sucessfull" })
            } else {
                res.send({ "msg": "Data is here", "err": err.message });
            }
        });
    } catch (err) {
        res.send({ "msg": " cannt update todo  sucessfull", "error": err.message })
    }
})

updateDelete.delete("/delete/:id",async(req,res) =>{
    const id = req.params.id;
    const token = req.headers.authorization;
    try{
        jwt.verify(token,"masai",async(err,decoded)=>{
            if(decoded){
                await todomodel.findByIdAndDelete({ _id: id });
                res.send({"msg":"data is deleted"})
            }else{
                res.send({"msg":"data can't deleted","err":err.message})
            }
        })

    }catch(err){
        res.send({"msg":"data can't deleted","err":err.message})

    }
})

module.exports = {
    updateDelete
}