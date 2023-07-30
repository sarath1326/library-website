

const express=require("express");
const router=express.Router();
const db=require("../../MonoDb/dbtransoer/Userdb")



router.get("/view/lit",(req,res)=>{

    console.log("hello")


    db.viewprolit().then((respo)=>{

        if(respo.flag){
            
            res.json(respo.data)
       
        }else{
           
            res.sendStatus(404)
        
        }

        })


    })





    










module.exports=router;