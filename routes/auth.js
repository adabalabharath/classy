const express = require("express");
const User = require("../model/user");
const validatePost = require("../signup/validate");
const bcrypt = require("bcrypt");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/authenticateToken");

authRouter.post("/signup", async (req, res) => {
  try {
    validatePost(req);
    const { name, email, password, bag, wishlist } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const signup = {
      name,
      email,
      password: hashPassword,
      bag,
      wishlist,
    };
    const user = new User(signup);
    await user.save();
    res.status(201).send({
      status: "User created successfully",
      user,
    });
  } catch (error) {
    res.send({ status: error.message });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("no user found");
    }

    const isValid = await user.validatePassword(password);

    if (!isValid) {
      throw new Error("invalid password");
    }
    const token = jwt.sign({ _id: user._id }, "classy", { expiresIn: "1d" });

    res.cookie("token", token, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });

    console.log(token);
    res.status(201).send({ status: "logged in successfully", user, token });
  } catch (error) {
    res.send({ status: error.message });
  }
});

authRouter.post("/logout", async (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.send({ status: "logged out" });
});

module.exports = authRouter;
