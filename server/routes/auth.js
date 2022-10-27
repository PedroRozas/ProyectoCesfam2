const router = require('express').Router();
const {Users} = require('../models/User.js');
const Auth = require('../services/auth-service.js')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config() 

router.post("/", async (req, res) => {
  console.log(req.body);
  const usuario = await Users.findOne({ email: req.body.email });
  if (!usuario)
    return res.json({ status: "error", error: "Invalid email or password" });
  const correctPassword = await Auth.matchPasswords(
    req.body.password,
    usuario.password
  );
  console.log("correctPwd: ", correctPassword);
  if (!correctPassword) return res.json("Contraseña incorrecta");
  console.log(req.body.email);
  const token = jwt.sign(
    {
      email: usuario.email,
      password: usuario.password,
    },
    process.env.TOKEN_SECRET
  );
  return res.json({ status: "ok", user: token });
});


module.exports = router;