import React from 'react';
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';
// import { getExpenses, setExpenses } from "../service/localStorage"

// function useForceUpdate() {
//     const [, setValue] = useState(0);
//     return () => setValue(value => value + 1);
// }

const ExpenseListPage = ({ expenses, setExpenses, setEditIndex }) => {
    const navigate = useNavigate()
    // const forceUpdate = useForceUpdate();
    // const expenses = getExpenses();

    const handleDeleteExpense = (ind) => {
        const updatedExpenses = expenses.filter((_, index) => {
            return index !== ind;
        });
        setExpenses(updatedExpenses);
        // forceUpdate();
    };

    const handleEditExpense = (ind) => {
        setEditIndex(ind)
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