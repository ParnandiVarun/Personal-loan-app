const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const PaymentSchema = new Schema(
  {
    loan: { type: Types.ObjectId, ref: "Loan", required: true, index: true },
    user: { type: Types.ObjectId, ref: "User", required: true },
    installmentId: { type: Number, required: true },
    amount: { type: Number, required: true, min: 0 },
    method: {
      type: String,
      enum: ["UPI", "CARD", "NETBANKING", "CASH"],
      required: true,
    },
    status: {
      type: String,
      enum: ["SUCCESS", "FAILED", "PENDING"],
      default: "SUCCESS",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
