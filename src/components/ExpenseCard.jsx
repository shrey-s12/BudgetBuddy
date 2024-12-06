import React, { useContext } from 'react';
import ExpensesContext from '../context/ExpensesContext';

const ExpenseCard = ({ onDeleteExpense, onEditExpense }) => {
    const { expenses } = useContext(ExpensesContext);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
            {expenses.map((expense, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-5 hover:shadow-2xl transition-shadow">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">{expense.title}</h2>
                        <p className="text-sm text-gray-500">{expense.date}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-2xl font-bold text-green-600">${expense.amount}</p>
                        <p className="text-sm text-gray-500">{expense.category}</p>
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => onDeleteExpense(index)}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => onEditExpense(index)}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExpenseCard;
