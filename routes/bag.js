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
       res.send({status:error.message});
   }
})

bagRouter.delete('/remove/:case',auth,async(req,res)=>{
    try{
       let name=req.params.case
       let user=req.user
       let caseValidation=user.bag.filter(x=>x.name===name)
       if(caseValidation.length===0){
        throw new Error('No product found')
       }
       let filtered=user.bag.filter(x=>x.name!==name)
       
       user.bag=filtered
       await user.save()
       res.send({status:'removed item successfully',user})
    }catch(error){
      res.send({status:error.message});
    }
})


module.exports=bagRouter