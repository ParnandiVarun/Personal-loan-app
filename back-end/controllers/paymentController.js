const Payment = require("../models/Payment");
const Loan = require("../models/Loan");

exports.makePayment = async (req, res) => {
  try {
    const { loanId, amount, method } = req.body;

    const payment = new Payment({
      loan: loanId,
      user: req.user.id,
      amount,
      method,
    });

    await payment.save();

    await Loan.findByIdAndUpdate(loanId, {
      $push: { repayments: payment._id },
    });

    res.status(201).json({ msg: "Payment successful", payment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find({ user: req.user.id });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
