const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { registerUser, loginUser } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/", authMiddleware(["admin"]), async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

router.get("/me", authMiddleware(), async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

module.exports = router;
