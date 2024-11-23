import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { useNavigate } from 'react-router-dom';

const ExpenseFormPage = ({ formValues, setFormValue, resetFormValues }) => {
    const navigate = useNavigate();
    const expensesDataString = localStorage.getItem('expenses_data_key') || '[]';
    const expenses = JSON.parse(expensesDataString)

    const handleSaveExpense = (expense, ind) => {
        if (ind !== undefined) {
            expenses[ind] = expense;
        } else {
            expenses.push(expense);
        }
        const updatedExpensesString = JSON.stringify(expenses);
        localStorage.setItem('expenses_data_key', updatedExpensesString);
        resetFormValues();
        navigate('/view-expenses');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full">
                <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
                    Daily Expense Tracker
                </h1>
                <ExpenseForm onSaveExpense={handleSaveExpense} formValues={formValues} setFormValue={setFormValue} resetFormValues={resetFormValues} />            </div>
        </div>
    );
};

export default ExpenseFormPage;