import { createSlice } from "@reduxjs/toolkit";

const initialState = {

};

const sortingSlice = createSlice({
    name: 'sortNameInSlice',
    initialState,
    reducers: {

    }
})

export const { toggleReverse } = sortingSlice.actions;
export default sortingSlice.reducer;
export const selectSort = (state) => state.sortKeyInStore;