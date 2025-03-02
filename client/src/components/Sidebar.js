import { Link } from "react-router-dom";
import { Home, LogOut, User } from "lucide-react";

const Sidebar = ({ user }) => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">Zidio Dashboard</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
          <Home size={20} />
          <span>Home</span>
        </Link>
        {user?.role === "User" && (
          <Link to="/user" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
            <User size={20} />
            <span>User Dashboard</span>
          </Link>
        )}
        {user?.role === "Admin" && (
          <Link to="/admin" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
            <User size={20} />
            <span>Admin Dashboard</span>
          </Link>
        )}
      </nav>
      <button className="mt-auto flex items-center space-x-2 p-2 bg-red-600 rounded-md hover:bg-red-700">
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
