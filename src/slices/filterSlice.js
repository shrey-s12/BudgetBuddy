import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCategory: [],
    isDropDownOpen: false,
};

const filterSlice = createSlice({
    name: 'filterNameInSlice',
    initialState,
    reducers: {
        toggleDropDown: (state) => {
            state.isDropDownOpen = !state.isDropDownOpen;
        },
        toggleCategory: (state, action) => {
            const category = action.payload;
            if (state.selectedCategory.includes(category)) {
                state.selectedCategory = state.selectedCategory.filter(
                    (item) => item !== category
                );
            } else {
                state.selectedCategory.push(category);
            }
        },
        applyFilter: (state) => {
            state.isDropDownOpen = false;
        },
        clearFilter: (state) => {
            state.selectedCategory = [];
            state.isDropDownOpen = false;
        },
    }
})

export const { toggleDropDown, toggleCategory, applyFilter, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;
export const selectFilter = (state) => state.filterKeyInStore;

// export const selectIsDropDownOpen = (state) => state.filterNameInSlice.isDropDownOpen;
// export const selectSelectedCategory = (state) => state.filterNameInSlice.selectedCategory;