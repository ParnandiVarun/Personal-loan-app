const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const LoanSchema = new Schema(
  {
    application: {
      type: Types.ObjectId,
      ref: "Application",
      required: true,
      unique: true,
    },
    user: { type: Types.ObjectId, ref: "User", required: true, index: true },
    principal: { type: Number, required: true, min: 0 },
    apr: { type: Number, required: true, min: 0, max: 100 },
    tenureMonths: { type: Number, required: true, min: 1 },
    disbursedAt: { type: Date, required: true },
    schedule: [
      {
        installmentId: { type: Number, required: true },
        dueDate: { type: Date, required: true, index: true },
        amountDue: { type: Number, required: true, min: 0 },
        principalPart: { type: Number, required: true, min: 0 },
        interestPart: { type: Number, required: true, min: 0 },
        status: {
          type: String,
          enum: ["UPCOMING", "PAID", "OVERDUE"],
          default: "UPCOMING",
          index: true,
        },
        paidAt: Date,
        lateFee: { type: Number, default: 0, min: 0 },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Loan", LoanSchema);
