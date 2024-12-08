export default function expenseFilterReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_DROPDOWN':
            return {
                ...state,
                isDropDownOpen: !state.isDropDownOpen,
            };
        case 'TOGGLE_CATEGORY':
            const category = action.payload;
            const updatedCategories = state.selectedCategory.includes(category)
                ? state.selectedCategory.filter((cat) => cat !== category)
                : [...state.selectedCategory, category];
            return {
                ...state,
                selectedCategory: updatedCategories,
            };
        case 'APPLY_FILTER':
            return {
                ...state,
                isDropDownOpen: false,
            };
        case 'CLEAR_FILTER':
            return {
                ...state,
                selectedCategory: [],
                isDropDownOpen: false,
            };
        default:
            return state;
    }
};
