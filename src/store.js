import { configureStore } from '@reduxjs/toolkit'
import expenseReducer from './slices/expenseSlice'
import filterReducer from './slices/filterSlice'
import sortingReducer from './slices/sortingSlice'

export const store = configureStore({
    reducer: {
        expenseKewInStore: expenseReducer,
        filterKeyInStore: filterReducer,
        sortKeyInStore : sortingReducer
    }
})