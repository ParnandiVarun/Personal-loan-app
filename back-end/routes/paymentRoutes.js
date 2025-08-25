const express = require("express");
const {
  makePayment,
  getPayments,
} = require("../controllers/paymentController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, makePayment);
router.get("/my", protect, getPayments);

module.exports = router;
