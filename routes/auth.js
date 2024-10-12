const express = require("express");
const User = require("../model/user");
const validatePost = require("../db/signup/validate");
const bcrypt=require('bcrypt')
const authRouter = express.Router();

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

module.exports = authRouter;
