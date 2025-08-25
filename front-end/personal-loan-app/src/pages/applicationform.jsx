import MultiStepForm from "../components/MultiStepForm";
import { createApplication } from "../services/applicationService";
import { useNavigate } from "react-router-dom";

const ApplicationForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await createApplication(formData);
      alert("Application submitted successfully!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.msg || "Error submitting application");
    }
  };

  return (
    <div>
      <h1>Loan Application</h1>
      <MultiStepForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ApplicationForm;
