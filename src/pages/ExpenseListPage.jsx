import React, { useState } from 'react';
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';

function useForceUpdate() {
    const [, setValue] = useState(0);
    return () => setValue(value => value + 1);
}

const ExpenseListPage = ({ setFormValues }) => {
    const navigate = useNavigate()
    const forceUpdate = useForceUpdate();

    const expensesDataString = localStorage.getItem('expenses_data_key') || '[]';
    const expenses = JSON.parse(expensesDataString)

    const handleDeleteExpense = (ind) => {
        expenses.splice(ind, 1);
        const updatedExpensesString = JSON.stringify(expenses);
        localStorage.setItem('expenses_data_key', updatedExpensesString);
        forceUpdate();
    };

    const handleEditExpense = (ind) => {
        const expense = expenses[ind];
        setFormValues({ ...expense, index: ind });
        navigate('/add-expenses');
    };

    return (
        <>
            <h1>Expense List</h1>
            <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} onEditExpense={handleEditExpense} />
        </>
    );
};

export default ExpenseListPage;