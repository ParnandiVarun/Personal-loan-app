const express = require("express");
const {
  createLoan,
  getUserLoans,
  getLoanById,
} = require("../controllers/loanController");
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/", protect, authorize("officer", "admin"), createLoan);
router.get("/my", protect, getUserLoans);
router.get("/:id", protect, getLoanById);

module.exports = router;
