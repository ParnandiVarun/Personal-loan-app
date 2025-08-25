const Loan = require("../models/Loan");
const Application = require("../models/Application");

exports.createLoan = async (req, res) => {
  try {
    const { applicationId, principal, apr, tenureMonths, disbursedAt } =
      req.body;

    const application = await Application.findById(applicationId);
    if (!application)
      return res.status(404).json({ msg: "Application not found" });

    const loan = await Loan.create({
      application: applicationId,
      user: application.user,
      principal,
      apr,
      tenureMonths,
      disbursedAt,
    });

    res.status(201).json(loan);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getUserLoans = async (req, res) => {
  try {
    const loans = await Loan.find({ user: req.user._id });
    res.json(loans);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getLoanById = async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id);
    res.json(loan);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
