const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const ApplicationSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "User", required: true, index: true },
    status: {
      type: String,
      enum: ["DRAFT", "SUBMITTED", "UNDER_REVIEW", "APPROVED", "REJECTED"],
      default: "DRAFT",
    },
    personal: {
      fullName: { type: String, required: true },
      dob: { type: Date, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
    },
    financial: {
      employmentStatus: {
        type: String,
        enum: ["EMPLOYED", "SELF_EMPLOYED", "STUDENT", "UNEMPLOYED"],
        required: true,
      },
      monthlyIncome: { type: Number, min: 0, required: true },
      existingDebts: { type: Number, min: 0, default: 0 },
      creditScore: { type: Number, min: 300, max: 900 },
    },
    loan: {
      amount: { type: Number, min: 1000, required: true },
      tenureMonths: { type: Number, min: 3, max: 120, required: true },
      interestAPR: { type: Number, min: 0, max: 100, required: true },
      purpose: { type: String, maxlength: 200 },
    },
    documents: [
      {
        label: {
          type: String,
          enum: ["ID_PROOF", "ADDRESS_PROOF", "INCOME_PROOF", "PHOTO", "OTHER"],
          required: true,
        },
        url: { type: String, required: true },
        status: {
          type: String,
          enum: ["PENDING", "APPROVED", "REJECTED"],
          default: "PENDING",
        },
        note: { type: String, maxlength: 200 },
      },
    ],
    decision: {
      officer: { type: Types.ObjectId, ref: "User" },
      note: String,
      decidedAt: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", ApplicationSchema);
