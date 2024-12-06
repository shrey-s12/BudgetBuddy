import React, { useContext } from 'react';
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';
import ExpensesContext from '../context/ExpensesContext';
import ExpenseCard from '../components/ExpenseCard';

const ExpenseListPage = ({ view }) => {
    const navigate = useNavigate();
    const { dispatchExpenseAction, setEditIndex } = useContext(ExpensesContext);
    const handleDeleteExpense = (ind) => {
        dispatchExpenseAction({
            type: "DELETE",
            payload: { ind: ind }
        });
    };

    const handleEditExpense = (ind) => {
        setEditIndex(ind)
        navigate('/add-expenses');
    };

    return (
        <>
            {view ? (
                <>
                    <h1>Expense in Table Format</h1>
                    <ExpenseList onDeleteExpense={handleDeleteExpense} onEditExpense={handleEditExpense} />
                </>
            ) : (
                <>
                    <h1>Expense in Card Format</h1>
                    <ExpenseCard onDeleteExpense={handleDeleteExpense} onEditExpense={handleEditExpense} />
                </>
            )}

        </>
    );
};

export default ExpenseListPage;