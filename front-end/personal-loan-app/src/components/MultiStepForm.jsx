import { useState } from "react";

const MultiStepForm = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: { fullName: "", dob: "", phone: "", address: "" },
    financial: { employmentStatus: "", monthlyIncome: "", existingDebts: "" },
    loan: { amount: "", tenureMonths: "", purpose: "" },
  });

  const handleChange = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: { ...formData[section], [field]: value },
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <h2>Personal Info</h2>
          <input
            placeholder="Full Name"
            value={formData.personal.fullName}
            onChange={(e) =>
              handleChange("personal", "fullName", e.target.value)
            }
          />
          <input
            type="date"
            value={formData.personal.dob}
            onChange={(e) => handleChange("personal", "dob", e.target.value)}
          />
          <input
            placeholder="Phone"
            value={formData.personal.phone}
            onChange={(e) => handleChange("personal", "phone", e.target.value)}
          />
          <input
            placeholder="Address"
            value={formData.personal.address}
            onChange={(e) =>
              handleChange("personal", "address", e.target.value)
            }
          />
          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Financial Info</h2>
          <select
            value={formData.financial.employmentStatus}
            onChange={(e) =>
              handleChange("financial", "employmentStatus", e.target.value)
            }
          >
            <option value="">Select</option>
            <option value="EMPLOYED">Employed</option>
            <option value="SELF_EMPLOYED">Self-Employed</option>
            <option value="STUDENT">Student</option>
            <option value="UNEMPLOYED">Unemployed</option>
          </select>
          <input
            placeholder="Monthly Income"
            type="number"
            value={formData.financial.monthlyIncome}
            onChange={(e) =>
              handleChange("financial", "monthlyIncome", e.target.value)
            }
          />
          <input
            placeholder="Existing Debts"
            type="number"
            value={formData.financial.existingDebts}
            onChange={(e) =>
              handleChange("financial", "existingDebts", e.target.value)
            }
          />
          <button type="button" onClick={prevStep}>
            Back
          </button>
          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Loan Details</h2>
          <input
            placeholder="Amount"
            type="number"
            value={formData.loan.amount}
            onChange={(e) => handleChange("loan", "amount", e.target.value)}
          />
          <input
            placeholder="Tenure Months"
            type="number"
            value={formData.loan.tenureMonths}
            onChange={(e) =>
              handleChange("loan", "tenureMonths", e.target.value)
            }
          />
          <input
            placeholder="Purpose"
            value={formData.loan.purpose}
            onChange={(e) => handleChange("loan", "purpose", e.target.value)}
          />
          <button type="button" onClick={prevStep}>
            Back
          </button>
          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
};

export default MultiStepForm;
