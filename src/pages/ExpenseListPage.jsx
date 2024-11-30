import React, { useContext } from 'react';
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';
import ExpensesContext from '../context/ExpensesContext';

const ExpenseListPage = () => {
    const navigate = useNavigate();
    const { expenses, setExpenses, setEditIndex } = useContext(ExpensesContext);

    const handleDeleteExpense = (ind) => {
        const updatedExpenses = expenses.filter((_, index) => {
            return index !== ind;
        });
        setExpenses(updatedExpenses);
    };

    const handleEditExpense = (ind) => {
        setEditIndex(ind)
        navigate('/add-expenses');
    };

    return (
        <>
            <h1>Expense List</h1>
            <ExpenseList onDeleteExpense={handleDeleteExpense} onEditExpense={handleEditExpense} />
        </>
    );
};

export default ExpenseListPage;