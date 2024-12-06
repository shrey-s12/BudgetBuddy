import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-white text-2xl font-bold">BudgetBuddy</h1>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold text-lg transition duration-300"
                  : "text-white text-lg hover:text-gray-300 transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-expenses"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold text-lg transition duration-300"
                  : "text-white text-lg hover:text-gray-300 transition duration-300"
              }
            >
              Add Expense
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/view-expenses"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold text-lg transition duration-300"
                  : "text-white text-lg hover:text-gray-300 transition duration-300"
              }
            >
              View Expenses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/card-expenses"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold text-lg transition duration-300"
                  : "text-white text-lg hover:text-gray-300 transition duration-300"
              }
            >
              Card Expenses
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar