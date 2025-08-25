import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import { useNavigate, Link } from "react-router-dom";

const Dashboard = () => {
  const { user, token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 animate-fade-in">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Welcome, {user?.name || "User"}!
          </h2>
          <p className="mb-6 text-center text-gray-600">
            Role: {user?.role || "N/A"}
          </p>
          <nav>
            <ul className="flex flex-col gap-4 mb-6">
              <li>
                <Link
                  to="/application"
                  className="block text-center py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Apply for Loan
                </Link>
              </li>
              <li>
                <Link
                  to="/payments"
                  className="block text-center py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  Payments
                </Link>
              </li>
              <li>
                <Link
                  to="/notifications"
                  className="block text-center py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
                >
                  Notifications
                </Link>
              </li>
            </ul>
          </nav>
          <button
            onClick={logout}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
        <style>
          {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.7s ease;
          }
        `}
        </style>
      </div>
    </>
  );
};

export default Dashboard;
