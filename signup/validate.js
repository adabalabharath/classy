const validator=require('validator')
const validatePost=(req)=>{
    if(!validator.isStrongPassword(req.body.password)){
    throw new Error('password should contain minimum 8 letters with atleast one capital,one small,one special character,one digit')
    }
    if(!validator.isEmail(req.body.email)){
    throw new Error('invalid email format')
    }
}

module.exports=validatePost