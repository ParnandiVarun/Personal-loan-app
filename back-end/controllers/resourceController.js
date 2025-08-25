const Resource = require("../models/Resource");

// Create Resource (Only admin & editor)
const createResource = async (req, res) => {
  try {
    const resource = new Resource({
      name: req.body.name,
      description: req.body.description,
      createdBy: req.user.id,
    });

    await resource.save();
    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get all resources (Public or logged-in users)
const getResources = async (req, res) => {
  try {
    const resources = await Resource.find().populate("createdBy", "name email");
    res.json(resources);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Update Resource (Only owner or admin)
const updateResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource) return res.status(404).json({ msg: "Resource not found" });

    // Only creator or admin can update
    if (
      resource.createdBy.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ msg: "Not authorized" });
    }

    resource.name = req.body.name || resource.name;
    resource.description = req.body.description || resource.description;

    await resource.save();
    res.json(resource);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Delete Resource (Only admin or owner)
const deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource) return res.status(404).json({ msg: "Resource not found" });

    if (
      resource.createdBy.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ msg: "Not authorized" });
    }

    await resource.deleteOne();
    res.json({ msg: "Resource deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  createResource,
  getAllResources,
  updateResource,
  deleteResource,
};
