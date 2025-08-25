import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/register";
import Dashboard from "./pages/Dashboard";
import ApplicationForm from "./pages/ApplicationForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/apply" element={<ApplicationForm />} />
      {}
    </Routes>
  );
}

export default App;
