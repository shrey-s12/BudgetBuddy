import { createContext, useState } from "react";
// import { getExpensesFromBackend, setExpensesInBackend } from "../service/localStorage";
// import expenseReducer from "../reducers/expenseReducer";
import { useDispatch, useSelector } from "react-redux";
import { selectAllExpenses } from "../slices/expenseSlice";
import { selectFilter } from "../slices/filterSlice";

const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {

    // const [editIndex, setEditIndex] = useState(-1);
    const [editId, setEditId] = useState(-1);
    const expenses = useSelector(selectAllExpenses);
    const filterState = useSelector(selectFilter);
    const dispatchExpenseAction = useDispatch();
    const dispatchFilterAction = useDispatch();


    // const [expenses, dispatchExpenseAction] = useReducer(expenseReducer, null);
    // useEffect(() => {
    //     // Start of the effect
    //     getExpensesFromBackend()
    //         .then(expensesVal => dispatchExpenseAction({
    //             type: "FILL",
    //             payload: { expenses: expensesVal }
    //         }))
    //         .catch(err => console.log(err));
    //     // End of the effect (Cleanup function)
    //     return () => {
    //         console.log("Effect Ended");
    //     }
    // }, []);

    // useEffect(() => {
    //     if (expenses === null) {
    //         return;
    //     }
    //     setExpensesInBackend(expenses)
    //         .then(() => console.log("Expenses updated in local storage"))
    //         .catch(err => console.log(err));
    //     return () => {
    //         console.log("Effect Ended");
    //     }
    // }, [expenses])

    const contextObject = {
        expenses: expenses || [],
        dispatchExpenseAction,
        editId,
        setEditId,
        filterState,
        dispatchFilterAction,
    }
    return (
        <ExpensesContext.Provider value={contextObject}>
            {children}
        </ExpensesContext.Provider>
    )
}

export default ExpensesContext;