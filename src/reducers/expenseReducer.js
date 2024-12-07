const generateId = (expenses) => {
    const maxId = expenses.reduce((acc, ele) => Math.max(acc, ele.id), -1);
    return maxId + 1;
}

export default function expenseReducer(state, action) {
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
            const { id } = action.payload;
            return state.filter(ele => ele.id !== id);
        }

        case "EDIT": {
            if (isInvalidState(state, action)) return state;
            const { id, expense } = action.payload;
            const updatedState = [...state];
            const ind = updatedState.findIndex(ele => ele.id === id);
            updatedState[ind] = {
                ...expense,
                id,
            };
            return updatedState;
        }

        case "ADD": {
            if (isInvalidState(state, action)) return state;
            const { expense } = action.payload;
            const newId = generateId(state);
            return [
                ...state,
                {
                    ...expense,
                    id: newId,
                }
            ];
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

// Action Creators
export const deleteExpenseAction = (id) => {
    return {
        type: "DELETE",
        payload: { id }
    };
}