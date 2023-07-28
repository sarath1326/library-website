

const express=require("express");

const router=express.Router();
const store=require("../../image/multer")




router.post("/addproducts",store.single("image"),(req,res)=>{

     console.log("hello")
    console.log(req.file)



    })




module.exports=router ;
