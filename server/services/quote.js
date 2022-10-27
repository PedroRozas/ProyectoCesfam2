const router = require("../routes/auth");
const jwt = require("jsonwebtoken");
const Users = require("../models/User");
const dotenv = require("dotenv");


dotenv.config() 

router.get("/", async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const email = decoded.email;
    const user = await Users.findOne({ email: email });

    return res.json ({status : "ok", quote: user});
  } catch (error) {
    console.log({status: "error", error: "Invalid token"});
  }
});

module.exports = router;
