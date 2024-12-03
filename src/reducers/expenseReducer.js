const reducer = (state, action) => {
    switch (action.type) {

        case "FILL": {
            if (state !== null) {
                console.error(action.type, " is unsupported. Data already loaded from backend.");
                return state;
            }
            const { expenses } = action.payload;
            return expenses;
        }

        case "DELETE": {
            if (isInvalidState(state, action)) return state;
            const { ind } = action.payload;
            return state.filter((_, index) => index !== ind);
        }

        case "EDIT": {
            if (isInvalidState(state, action)) return state;
            const { ind, expense } = action.payload;
            const updatedState = [...state];
            updatedState[ind] = expense;
            return updatedState;
        }

        case "ADD": {
            if (isInvalidState(state, action)) return state;
            const { expense } = action.payload;
            const updatedState = [...state];
            updatedState.push(expense);
            return updatedState;
        }

        default: {
            return state;
        }
    }
};

const isInvalidState = (state, action) => {
    if (state === null) {
        console.warn(action.type, " is unsupported. Data not loaded from backend yet!");
        return true;
    }
    return false;
}

export default reducer;