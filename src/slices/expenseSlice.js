import { createSlice } from "@reduxjs/toolkit";

const generateNewId = (state) => {
    let newId = -1;
    state.list.forEach(ele => {
        newId = Math.max(newId, ele.id);
    });
    return newId + 1;
}

const initialState = {
    currency: 'Rupees',
    list: [],
}

const expenseSlice = createSlice({
    name: 'expense',
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
    },
});

export const { addExpense, editExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
export const selectAllExpenses = (state) => state.expenseKewInStore.list;