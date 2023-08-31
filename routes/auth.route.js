const express = require("express");
const UserModel = require("../models/user.model");
const AuthController = require("../controller/auth.controller");

const router = express.Router();

const authController = new AuthController();

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
