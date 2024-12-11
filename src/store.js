import { configureStore } from '@reduxjs/toolkit'
import expenseReducer from './slices/expenseSlice'
import filterReducer from './slices/filterSlice'

export const store = configureStore({
    reducer: {
        expenseKewInStore: expenseReducer,
        filterKeyInStore: filterReducer,
    }
})