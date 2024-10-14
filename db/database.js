const mongoose=require('mongoose')

const connectDB=async()=>{

await mongoose.connect('mongodb+srv://saibharathadabala:hareen123@ascii.rluwb.mongodb.net/classy')
}

module.exports=connectDB