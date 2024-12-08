const generateNewId = (state) => {
    let newId = -1;
    state.forEach(ele => {
        newId = Math.max(newId, ele.id);
    });
    return newId + 1;
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
            const newId = generateNewId(state);
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
    if (state.reduce((isInvalid, ele) => (isInvalid || ele.id === undefined), false)) {
        console.error("State invalid, some of the expenses don't have an 'id'");
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