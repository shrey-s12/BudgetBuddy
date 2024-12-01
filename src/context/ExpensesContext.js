import { createContext, useEffect, useState } from "react";
import { getExpensesFromBackend, setExpensesInBackend } from "../service/localStorage";

const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {

    const [editIndex, setEditIndex] = useState(-1);
    const [expenses, setExpenses] = useState([]);
    useEffect(() => {
        // Start of the effect
        getExpensesFromBackend()
            .then(expensesVal => setExpenses(expensesVal))
            .catch(err => console.log(err));
        // End of the effect (Cleanup function)
        return () => {
            console.log("Effect Ended");
        }
    }, []);

    useEffect(() => {
        setExpensesInBackend(expenses)
            .then(() => console.log("Expenses updated in local storage"))
            .catch(err => console.log(err));
        return () => {
            console.log("Effect Ended");
        }
    }, [expenses])

    const contextObject = {
        expenses,
        setExpenses,
        editIndex,
        setEditIndex
    }
    return (
        <ExpensesContext.Provider value={contextObject}>
            {children}
        </ExpensesContext.Provider>
    )
}

export default ExpensesContext;