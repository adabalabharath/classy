const jwt=require('jsonwebtoken')
const User = require('../model/user')

const auth=async(req,res,next)=>{
    let {token}=req.cookies
    let verifyToken=jwt.verify(token,'classy')
    let user=await User.findById(verifyToken._id)
    if(!user){
        throw new Error('invalid token')
    }
    req.user=user
    next()
}

module.exports=auth