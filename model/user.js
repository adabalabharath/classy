const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const bagSchema = mongoose.Schema({
  name: String,
  price: String,
  discount: String,
  imageURL: String,
  count: {
    type: Number,
    default: 1,
  },
});
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 4,
      maxLength: 15,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    bag: {
      type: [bagSchema],
    },
    wishlist: {
      type: [],
    },
  },
  { timestamps: true }
);

userSchema.methods.validatePassword = async function (password) {
  let valid = await bcrypt.compare(password, this.password);
  return valid;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
