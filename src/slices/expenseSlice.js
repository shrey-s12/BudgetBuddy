import { createSlice } from "@reduxjs/toolkit";
import { selectCategoryFilter } from "./filterSlice";

const generateNewId = (state) => {
    let newId = -1;
    state.list.forEach(ele => {
        newId = Math.max(newId, ele.id);
    });
    return newId + 1;
}

const initialState = {
    currency: 'Rupees',
    list: [
        {
            "date": "2021-07-01",
            "amount": 100,
            "title": "Pizza",
            "category": "Food",
            "id": 0,
        },
        {
            "date": "2021-07-02",
            "amount": 200,
            "title": "Petrol",
            "category": "Travel",
            "id": 1,
        },
        {
            "date": "2021-07-03",
            "amount": 300,
            "title": "Books",
            "category": "Shopping",
            "id": 2,
        },
        {
            "date": "2021-07-04",
            "amount": 400,
            "title": "Medicine",
            "category": "Health",
            "id": 3,
        },
        {
            "date": "2021-07-05",
            "amount": 500,
            "title": "Movie",
            "category": "Entertainment",
            "id": 4,
        },
    ],
}

const expenseSlice = createSlice({
    name: 'expenseNameInSlice',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            const newExpense = {
                ...action.payload.expense,
                id: generateNewId(state),
            }
            state.list.push(newExpense);
        },
        editExpense: (state, action) => {
            const { id, expense } = action.payload;
            state.list = state.list.map((ele) => ele.id === id ? expense : ele);
        },
        deleteExpense: (state, action) => {
            const { id } = action.payload;
            state.list = state.list.filter((ele) => ele.id !== id);
        },
        reverseExpenses: (state) => {
            state.list = state.list.reverse();
        },
        fillExpenses: (state, action) => {
            state.list = action.payload;
        }
    },
});

// Export Actions
export const { addExpense, editExpense, deleteExpense, reverseExpenses, fillExpenses } = expenseSlice.actions;

// Export Reducer
export default expenseSlice.reducer;

// Export Selectors
export const selectAllExpenses = (state) => state.expenseKewInStore.list;
export const selectCurrency = (state) => state.expenseKewInStore.currency;
export const selectExpenseById  = (id) => (state) => state.expenseKewInStore.list.find((ele) => ele.id === id);
export const selectAllCategories = (state) => {
    const allCategories = [];
    state.expenseKeyInStore.list.forEach((expense) => {
        if (!allCategories.includes(expense.category)) {
            allCategories.push(expense.category);
        }
    });
    return allCategories;
};

export const selectFilteredExpenses = (state) => {
    const selectedCategories = selectCategoryFilter(state) || selectAllCategories(state);
    return state.expenseKeyInStore.list.filter((expense) => selectedCategories.includes(expense.category));
}