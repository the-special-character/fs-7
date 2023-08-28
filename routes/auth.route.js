const express = require("express");
const UserModel = require("../models/user.model");

const router = express.Router();

router.post("/register", async function (req, res) {
  try {
    const User = new UserModel(req.body);
    await User.save();
    res.send("register success");
  } catch (error) {
    console.log(error);
    res.send("register failed");
  }
});

module.exports = router;
