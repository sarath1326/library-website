

const mongoose=require("mongoose")


module.exports.dbconnecting=()=>{

mongoose.connect('mongodb://127.0.0.1:27017/testlibrary')
  
   .then(() => console.log("DB connecting"));


}


