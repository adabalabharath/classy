const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcrypt')
const userSchema=mongoose.Schema({
    name:{
        type:String,
        minLength:4,
        maxLength:15
    },
    email:{
       type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    bag:{
        type:[String]
    },
    wishlist:{
        type:[String]
    }
},
  { timestamps: true })

userSchema.methods.validatePassword=async function(password){
   let valid=await bcrypt.compare(password,this.password)
   return valid
}

const User=mongoose.model('User',userSchema)

module.exports=User