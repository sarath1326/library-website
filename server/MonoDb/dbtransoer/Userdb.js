


const mongoos=require("mongoose")






const viewproductschema=new mongoos.Schema({



    filename:{
        type: String,
        unique:true,
        require: true
    },

    contentType:{
        type: String,
        require: true

    },

    imageBase64:{

        type: String,
        require: true

    },

    name:String,
    author:String,
    language:String,
    price:String,
    publisher:String,
    cotegory:String,
    type:String,

})




   module.exports={


          viewprolit:()=>{

            return new Promise( async(resolve,reject)=>{

                const obj={}

                const viewprolit=mongoos.model("products",viewproductschema)


                  const result= await  viewprolit.find({cotegory:"literacher"})

                   console.log(result)
                  
                 if (result){

                    obj.flag=true
                    obj.data=result
                   
                    resolve(obj)

                 
                 }else{
                    
                   resolve({flag:false})
                 
                }





            })








          }






   }

        