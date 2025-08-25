const express = require("express");
const {
  createApplication,
  updateApplication,
  submitApplication,
  getMyApplications,
  getApplicationById,
} = require("../controllers/applicationController");
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/", protect, createApplication); // Create new application
router.put("/:id", protect, updateApplication); // Update application step
router.put("/:id/submit", protect, submitApplication); // Final submit
router.get("/my", protect, getMyApplications); // Get logged-in user applications
router.get("/:id", protect, getApplicationById); // Get single application by id

module.exports = router;
