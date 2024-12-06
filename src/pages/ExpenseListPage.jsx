import React, { useContext, useState } from 'react';
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';
import ExpensesContext from '../context/ExpensesContext';
import ExpenseCard from '../components/ExpenseCard';

const ExpenseListPage = ({ view }) => {
    const navigate = useNavigate();
    const { expenses, dispatchExpenseAction, setEditIndex } = useContext(ExpensesContext);

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleDeleteExpense = (ind) => {
        dispatchExpenseAction({
            type: "DELETE",
            payload: { ind: ind },
        });
    };

    const handleEditExpense = (ind) => {
        setEditIndex(ind);
        navigate('/add-expenses');
    };

    const categories = ['All', ...Array.from(new Set(expenses.map((expense) => expense.category)))];

    const filteredExpenses =
        selectedCategory && selectedCategory !== 'All'
            ? expenses.filter((expense) => expense.category === selectedCategory)
            : expenses;

    return (
        <div>
            {/* Category Filter Dropdown */}
            <div className="mb-4">
                <label htmlFor="category" className="mr-2">Filter by Category:</label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border rounded px-2 py-1"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {/* Display No Expenses Message or the Filtered List */}
            {filteredExpenses.length === 0 ? (
                <p className="text-center text-gray-500">No expenses found for this category.</p>
            ) : view ? (
                <>
                    <h1>Expense in Table Format</h1>
                    <ExpenseList
                        expenses={filteredExpenses}
                        onDeleteExpense={handleDeleteExpense}
                        onEditExpense={handleEditExpense}
                    />
                </>
            ) : (
                <>
                    <h1>Expense in Card Format</h1>
                    <ExpenseCard
                        expenses={filteredExpenses}
                        onDeleteExpense={handleDeleteExpense}
                        onEditExpense={handleEditExpense}
                    />
                </>
            )}
        </div>
    );
};

export default ExpenseListPage;
