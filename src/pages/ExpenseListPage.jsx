import React, { useContext, useReducer } from 'react';
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';
import ExpensesContext from '../context/ExpensesContext';
import ExpenseCard from '../components/ExpenseCard';
import { deleteExpenseAction } from '../reducers/expenseReducer';
import expenseFilterReducer from '../reducers/filterReducer';

const ExpenseListPage = ({ view }) => {
    const navigate = useNavigate();
    const { expenses, dispatchExpenseAction, setEditId } = useContext(ExpensesContext);

    const initialFilterState = { selectedCategory: [], isDropDownOpen: false };
    const [filterState, dispatchFilterAction] = useReducer(
        expenseFilterReducer,
        initialFilterState
    );

    const handleDeleteExpense = (ind) => {
        console.log(ind)
        dispatchExpenseAction(deleteExpenseAction(ind));
    };

    const handleEditExpense = (id) => {
        setEditId(id);
        navigate('/add-expenses');
    };

    const handleDropDownToggle = () => {
        dispatchFilterAction({ type: 'TOGGLE_DROPDOWN' });
    };

    const handleCheckboxChange = (category) => {
        dispatchFilterAction({
            type: 'TOGGLE_CATEGORY',
            payload: category,
        })
    };

    const applyFilter = () => {
        dispatchFilterAction({ type: 'APPLY_FILTER' });
    };

    const clearFilter = () => {
        dispatchFilterAction({ type: 'CLEAR_FILTER' });
    };

    const categories = Array.from(new Set(expenses.map((expense) => expense.category)));
    const filteredExpenses = filterState.selectedCategory.length > 0
        ? expenses.filter((expense) => filterState.selectedCategory.includes(expense.category))
        : expenses;

    return (
        <div>
            {/* Category Filter Dropdown */}
            <div className="relative mb-4">
                <button
                    onClick={handleDropDownToggle}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Filter by Categories
                </button>

                {filterState.isDropDownOpen && (
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
                                        checked={filterState.selectedCategory.includes(category)}
                                        onChange={() => handleCheckboxChange(category)}
                                        className="form-checkbox"
                                    />
                                    <span>{category}</span>
                                </label>
                            ))}
                        </div>
                        <div className="flex justify-around border-t p-2">
                            <button
                                onClick={applyFilter}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Apply
                            </button>
                            <button>
                                <button
                                    onClick={clearFilter}
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
