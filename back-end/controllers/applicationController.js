const Application = require("../models/Application");

exports.createApplication = async (req, res) => {
  try {
    const application = await Application.create({
      user: req.user._id,
      ...req.body,
    });
    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await Application.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(application);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.submitApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await Application.findByIdAndUpdate(
      id,
      { status: "SUBMITTED" },
      { new: true }
    );
    res.json({ msg: "Application submitted", application });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({ user: req.user._id });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    res.json(application);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
