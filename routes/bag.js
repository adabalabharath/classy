const express = require("express");
const auth = require("../middlewares/authenticateToken");
const bagRouter=express.Router()

bagRouter.post('/addbag',auth,async(req,res)=>{
   try{
       let loggedUser=req.user
       loggedUser.bag.push(req.body);
       await loggedUser.save()
       res.send({status:'added to bag',user:loggedUser})
   }catch(error){
       res.send(error)
   }
})


module.exports=bagRouter