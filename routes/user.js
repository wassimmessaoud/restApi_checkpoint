const express=require('express')
const router=express.Router()
const User=require('../models/user')

// get all users
router.get("/users",async(req,res)=>{
    try {
      const users=  await User.find()
      res.send({users,msg:"user successfully"})
    } catch (error) {
        console.log(error)
        res.status(400).send({msg:"connot get users  "})
    }
})
//  add new users
router.post("/",async(req,res)=>{
  const {email}=req.body
  try {
    const userExist=  await User.findOne({email})
  if(userExist){
    return (  res.status(400).send({msg:"user exist with this email "}))
  }
  const newUser= await new User(req.body)
  newUser.save()
  res.send({newUser,msg:"user successfully"})
  } catch (error) {
      console.log(error)
      res.status(400).send({msg:"connot get users  "})
  }
  
})
// delete user
router.delete('/users/:id',async(req,res)=>{
  console.log(req.params.id)
try {
  const deletUser=await User.deleteOne({_id:req.params.id})
  deleteUser.deletedCount?
  res.send({deleteUser,msg:"user delete"}):
  res.send({deleteUser,msg:"user alerty delete"})
} catch (error) {
  
  console.log(error)
  res.status(400).send({msg:"connot get users  "})
}
})
// updata user 
router.put('/:id',async(req,res)=>{
 
try {
  const updataUser=await User.updateOne({_id:req.params.id},{$set:{...req.body}})
 res.send({updataUser,msg:"user updata succeccflly"})
} catch (error) {
  console.log(error)
  res.status(400).send({msg:"connot update users  "})
}
})
module.exports=router