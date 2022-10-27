const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("Joi");
const passwordComplexity = require("Joi-password-complexity");

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

UserSchema.methods.generateAuthToken = function () { 
  const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATE_KEY, {expiresIn: "2d"});
  return token
}

const Users = mongoose.model("User", UserSchema);

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("email"),
    name: Joi.string().required().label("name"),
    lastname: Joi.string().required().label("lastname"),
    username: Joi.string().required().label("username"),
    password: passwordComplexity().required().label("password"),
    phone: Joi.string().required().label("phone"),
    birth: Joi.string().required().label("birth"),
  });
  return schema.validate(data);
};

module.exports = {Users, validate };
