import { createContext, useEffect, useReducer, useState } from "react";
import { getExpensesFromBackend, setExpensesInBackend } from "../service/localStorage";
import expenseReducer from "../reducers/expenseReducer";

const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {

    // const [editIndex, setEditIndex] = useState(-1);
    const [editId, setEditId] = useState(-1);
    const [expenses, dispatchExpenseAction] = useReducer(expenseReducer, null);
    useEffect(() => {
        // Start of the effect
        getExpensesFromBackend()
            .then(expensesVal => dispatchExpenseAction({
                type: "FILL",
                payload: { expenses: expensesVal }
            }))
            .catch(err => console.log(err));
        // End of the effect (Cleanup function)
        return () => {
            console.log("Effect Ended");
        }
    }, []);

    useEffect(() => {
        if (expenses === null) {
            return;
        }
        setExpensesInBackend(expenses)
            .then(() => console.log("Expenses updated in local storage"))
            .catch(err => console.log(err));
        return () => {
            console.log("Effect Ended");
        }
    }, [expenses])

    const contextObject = {
        expenses: expenses || [],
        dispatchExpenseAction,
        editId,
        setEditId,
    }
    return (
        <ExpensesContext.Provider value={contextObject}>
            {children}
        </ExpensesContext.Provider>
    )
}

export default ExpensesContext;