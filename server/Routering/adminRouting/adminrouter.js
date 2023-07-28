

const express=require("express");

const router=express.Router();
const store=require("../../image/multer")
const db=require("../../MonoDb/dbtransoer/Admindb")




router.post("/addproducts",store.single("image"),(req,res)=>{

     console.log("hello")
    console.log(req.file)

    const data={
        img:req.file,
        details:req.body
    }

    db.addproducts(data).then((respo)=>{

        res.json("data added sucssfully")

    }).catch(err=>{

        res.json("filed"+err)
    })




    })




module.exports=router ;
