

const express=require("express");
const router=express.Router();




router.get("/",(req,res)=>{

    res.send("welcome user port")
})







module.exports=router;