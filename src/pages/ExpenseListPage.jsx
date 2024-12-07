import React, { useContext, useState } from 'react';
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';
import ExpensesContext from '../context/ExpensesContext';
import ExpenseCard from '../components/ExpenseCard';
import { deleteExpenseAction } from '../reducers/expenseReducer';

const ExpenseListPage = ({ view }) => {
    const navigate = useNavigate();
    const { expenses, dispatchExpenseAction, setEditId } = useContext(ExpensesContext);

    const [selectedCategory, setSelectedCategory] = useState([]);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const handleDeleteExpense = (ind) => {
        console.log(ind)
        dispatchExpenseAction(deleteExpenseAction(ind));
    };

    const handleEditExpense = (id) => {
        setEditId(id);
        navigate('/add-expenses');
    };

    const categories = Array.from(new Set(expenses.map((expense) => expense.category)));

    const handleCheckboxChange = (category) => {
        setSelectedCategory((prevSelected) =>
            prevSelected.includes(category)
                ? prevSelected.filter((cat) => cat !== category) // Remove category if already selected
                : [...prevSelected, category] // Add category if not selected
        );
    };

    const filteredExpenses = selectedCategory.length > 0
        ? expenses.filter((expense) => selectedCategory.includes(expense.category))
        : expenses;

    return (
        <div>
            {/* Category Filter Dropdown */}
            <div className="relative mb-4">
                <button
                    onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Filter by Categories
                </button>

                {isDropDownOpen && (
                    <div className="absolute bg-white border rounded shadow-md mt-2 w-64 max-h-64 overflow-y-auto">
                        <div className="p-2">
                            {categories.map((category) => (
                                <label
                                    key={category}
                                    className="flex items-center space-x-2 mb-2"
                                >
                                    <input
                                        type="checkbox"
                                        value={category}
                                        checked={selectedCategory.includes(category)}
                                        onChange={() => handleCheckboxChange(category)}
                                        className="form-checkbox"
                                    />
                                    <span>{category}</span>
                                </label>
                            ))}
                        </div>
                        <div className="flex justify-around border-t p-2">
                            <button
                                onClick={() => {
                                    setIsDropDownOpen(false);
                                }}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Apply
                            </button>
                            <button>
                                <button
                                    onClick={() => {
                                        setSelectedCategory([]);
                                        setIsDropDownOpen(false);
                                    }}
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Clear
                                </button>
                            </button>
                        </div>
                    </div>
                )}
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
