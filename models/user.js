const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{type:String, uppercase:true,  required:true},
    email:{type:String, lowercase:true},
    age:{type:Number, default:26}
})
module.exports=User=mongoose.model("user",userSchema)