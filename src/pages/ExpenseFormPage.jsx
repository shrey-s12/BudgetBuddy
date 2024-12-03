import React, { useContext } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { useNavigate } from 'react-router-dom';
import ExpensesContext from '../context/ExpensesContext';

const ExpenseFormPage = () => {
    const navigate = useNavigate();
    const { dispatchExpenseAction, setEditIndex } = useContext(ExpensesContext);

    const handleSaveExpense = (expense, ind) => {
        const action = {};
        if (ind > -1) {
            action.type = "EDIT";
            action.payload = { ind, expense };
        } else {
            action.type = "ADD";
            action.payload = { expense };
        }
        dispatchExpenseAction(action)
        setEditIndex(-1);
        navigate('/view-expenses');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full">
                <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
                    Daily Expense Tracker
                </h1>
                <ExpenseForm onSaveExpense={handleSaveExpense} />
            </div>
        </div>
    );
};

export default ExpenseFormPage;