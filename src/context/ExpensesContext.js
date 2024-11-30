import { createContext, useEffect, useState } from "react";
import { getExpensesFromBackend, setExpensesInBackend } from "../service/localStorage";

const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {

    const [editIndex, setEditIndex] = useState(-1);
    const [expenses, setExpenses] = useState([]);
    useEffect(() => {
        getExpensesFromBackend()
            .then(expensesVal => setExpenses(expensesVal))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        setExpensesInBackend(expenses)
            .then(() => console.log("Expenses updated in local storage"))
            .catch(err => console.log(err));
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