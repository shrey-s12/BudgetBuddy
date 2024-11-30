import React, { useContext } from 'react';
import ExpensesContext from '../context/ExpensesContext';

const ExpenseList = ({ onDeleteExpense, onEditExpense }) => {
  const { expenses } = useContext(ExpensesContext);
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{expense.date}</td>
              <td className="border px-4 py-2">${expense.amount}</td>
              <td className="border px-4 py-2">{expense.title}</td>
              <td className="border px-4 py-2">{expense.category}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => onDeleteExpense(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => onEditExpense(index)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
