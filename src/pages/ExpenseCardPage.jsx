import React, { useContext } from 'react';
import ExpenseCard from '../components/ExpenseCard';
import { useNavigate } from 'react-router-dom';
import ExpensesContext from '../context/ExpensesContext';

const ExpenseCardPage = () => {
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
    <div>
        <h1>Expense Card</h1>
        <ExpenseCard onDeleteExpense={handleDeleteExpense} onEditExpense={handleEditExpense} />
    </div>
  )
}

export default ExpenseCardPage