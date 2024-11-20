import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-600 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-white text-2xl font-bold">BudgetBuddy</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white text-lg hover:text-gray-300 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/form" className="text-white text-lg hover:text-gray-300 transition duration-300">Form</Link>
          </li>
          <li>
            <Link to="/view" className="text-white text-lg hover:text-gray-300 transition duration-300">View</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
