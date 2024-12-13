import React, { useContext, useState } from 'react';
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';
import ExpensesContext from '../context/ExpensesContext';
import ExpenseCard from '../components/ExpenseCard';
// import expenseFilterReducer from '../reducers/filterReducer';
import { deleteExpense } from '../slices/expenseSlice';
import { toggleDropDown, toggleCategory, applyFilter, clearFilter } from '../slices/filterSlice';

const ExpenseListPage = ({ view }) => {
    const navigate = useNavigate();
    const [reverse, setReverse] = useState(true);
    const { expenses, dispatchExpenseAction, filterState,
        dispatchFilterAction, setEditId } = useContext(ExpensesContext);

    // const initialFilterState = { selectedCategory: [], isDropDownOpen: false };
    // const [filterState, dispatchFilterAction] = useReducer(
    //     expenseFilterReducer,
    //     initialFilterState
    // );

    const handleDeleteExpense = (id) => {
        console.log(id);
        dispatchExpenseAction(deleteExpense({ id }));
    };

    const handleEditExpense = (id) => {
        setEditId(id);
        navigate('/add-expenses');
    };

    const handleDropDownToggle = () => {
        dispatchFilterAction(toggleDropDown());
    };

    const handleCheckboxChange = (category) => {
        dispatchFilterAction(toggleCategory(category));
    };

    const handleApplyFilter = () => {
        dispatchFilterAction(applyFilter());
    };

    const handleClearFilter = () => {
        dispatchFilterAction(clearFilter());
    };

    const handleReverse = () => {
        setReverse(!reverse);
    }

    const categories = Array.from(new Set(expenses.map((expense) => expense.category)));
    const filteredExpenses = filterState.selectedCategory.length > 0
        ? expenses.filter((expense) => filterState.selectedCategory.includes(expense.category))
        : expenses;

    return (
        <div>
            {/* Category Filter Dropdown */}
            <div className="relative flex space-x-5 mb-4">
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
                                onClick={handleApplyFilter}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Apply
                            </button>
                            <button>
                                <button
                                    onClick={handleClearFilter}
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Clear
                                </button>
                            </button>
                        </div>
                    </div>
                )}

                <button
                    onClick={handleReverse}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    {reverse ? 'OldestFirst' : 'LatestFirst'}
                </button>

                {/* <button
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Sort By
                </button> */}
                <select>
                    <option value="sortBy">SortBy</option>
                    <option value="A-Z">A-Z</option>
                    <option value="price">price</option>
                    <option value="date">Date</option>
                </select>

            </div>

            {/* Display No Expenses Message or the Filtered List */}
            {filteredExpenses.length === 0 ? (
                <p className="text-center text-gray-500">No expenses found.</p>
            ) : view ? (
                <>
                    <h1>Expense in Table Format</h1>
                    <ExpenseList
                        isReverse={reverse}
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
