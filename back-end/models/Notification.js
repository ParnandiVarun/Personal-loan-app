const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const NotificationSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "User", required: true, index: true },
    type: {
      type: String,
      enum: [
        "STATUS_CHANGE",
        "DOC_REVIEW",
        "PAYMENT_REMINDER",
        "OVERDUE_ALERT",
      ],
      required: true,
    },
    title: String,
    message: String,
    read: { type: Boolean, default: false },
    meta: Schema.Types.Mixed,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", NotificationSchema);
