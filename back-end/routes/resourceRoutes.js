


const express = require("express");
const router = express.Router();
const {
  createResource,
  getAllResources,
  updateResource,
  deleteResource,
} = require("../controllers/resourceController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware(), getAllResources);


router.post("/", authMiddleware(), createResource);
router.put("/:id", authMiddleware(), updateResource);
router.delete("/:id", authMiddleware(), deleteResource);

module.exports = router;
