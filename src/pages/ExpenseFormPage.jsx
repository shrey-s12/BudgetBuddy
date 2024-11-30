import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { useNavigate } from 'react-router-dom';

const ExpenseFormPage = ({ expenses, setExpenses, editIndex, setEditIndex }) => {
    const navigate = useNavigate();

    const handleSaveExpense = (expense, ind) => {
        // const expenses = getExpenses();
        const updatedExpenses = [...expenses];
        if (ind > -1) {
            updatedExpenses[ind] = expense;
        } else {
            updatedExpenses.push(expense);
        }
        setExpenses(updatedExpenses);
        setEditIndex(-1);
        navigate('/view-expenses');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full">
                <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
                    Daily Expense Tracker
                </h1>
                <ExpenseForm expenses={expenses} onSaveExpense={handleSaveExpense} editIndex={editIndex} key={editIndex} />
            </div>
        </div>
    );
};

export default ExpenseFormPage;