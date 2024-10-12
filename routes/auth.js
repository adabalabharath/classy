const express = require("express");
const User = require("../model/user");
const validatePost = require("../signup/validate");
const bcrypt=require('bcrypt')
const authRouter = express.Router();
const jwt=require('jsonwebtoken')

authRouter.use("/signup", async (req, res) => {
  try {
    validatePost(req);
    const { name, email, password, bag, wishlist } = req.body;
    const hashPassword=await bcrypt.hash(password,10)
    const signup = {
      name,
      email,
      password:hashPassword,
      bag,
      wishlist,
    };
    const user = new User(signup);
    await user.save()
    res.status(201).send({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.send(error.message);
  }
});

authRouter.use("/login", async (req, res) => {
  try {
    
    const {email, password} = req.body;

    const user=await User.findOne({email})

    if(!user){
        throw new Error('no user found')
    }

    const isValid=await user.validatePassword(password)

    if(!isValid){
        throw new Error('invalid password')
    }
    const token=jwt.sign({_id:user._id},'classy')

    res.cookie('token',token)
    

    res.status(201).send('logged in successfully');
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = authRouter;
