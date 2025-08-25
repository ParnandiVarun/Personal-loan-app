import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex justify-between items-center">
    <span className="font-bold text-xl text-blue-600">Personal Loan App</span>
    <div className="space-x-4">
      <Link to="/dashboard" className="hover:text-blue-500">
        Dashboard
      </Link>
      <Link to="/application" className="hover:text-blue-500">
        Apply
      </Link>
      <Link to="/payments" className="hover:text-blue-500">
        Payments
      </Link>
      <Link to="/notifications" className="hover:text-blue-500">
        Notifications
      </Link>
    </div>
  </nav>
);

export default Navbar;
