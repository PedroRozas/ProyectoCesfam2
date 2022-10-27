const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    birth: { type: String, required: true },
  }
);


const Users = mongoose.model("User", UserSchema);



module.exports = {Users };
