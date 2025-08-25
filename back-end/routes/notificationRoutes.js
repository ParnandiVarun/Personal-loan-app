const express = require("express");
const {
  createNotification,
  getUserNotifications,
} = require("../controllers/notificationController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createNotification);
router.get("/my", protect, getUserNotifications);

module.exports = router;
