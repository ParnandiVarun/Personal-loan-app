const Notification = require("../models/Notification");

exports.createNotification = async (req, res) => {
  try {
    const notification = await Notification.create({
      user: req.body.user || req.user._id,
      type: req.body.type,
      title: req.body.title,
      message: req.body.message,
    });
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getUserNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
