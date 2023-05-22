const mongoose = require("mongoose");
const LoginSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    bio: String,
    image: String,
    hash: String,
    salt: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", LoginSchema);

module.exports = User;
