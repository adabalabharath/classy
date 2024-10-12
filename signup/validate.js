const validator=require('validator')
const validatePost=(req)=>{
    if(!validator.isStrongPassword(req.body.password)){
    throw new Error('password is not strong')
    }
    if(!validator.isEmail(req.body.email)){
    throw new Error('invalid email format')
    }
}

module.exports=validatePost