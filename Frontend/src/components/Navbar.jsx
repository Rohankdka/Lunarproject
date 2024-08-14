import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-8 py-4">
          <Link className="text-gray-800 hover:text-blue-500" to="/">Home</Link>
          <Link className="text-gray-800 hover:text-blue-500" to="/users">Users</Link>
          <Link className="text-gray-800 hover:text-blue-500" to="/content">Content</Link>
          <Link className="text-gray-800 hover:text-blue-500" to="/themes">Themes</Link>
          <Link className="text-gray-800 hover:text-blue-500" to="/company-info">Company Info</Link>
          <Link className="text-gray-800 hover:text-blue-500" to="/settings">Settings</Link>
          <Link className="text-gray-800 hover:text-blue-500" to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
