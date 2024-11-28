const EXPENSES_DATA_KEY = 'expenses_data_key';

export function getExpenses() {
    const expenseDataString = localStorage.getItem(EXPENSES_DATA_KEY) || "[]";
    const expenses = JSON.parse(expenseDataString);
    return expenses;
}

export function setExpenses(expenses) {
    const updatedExpensesString = JSON.stringify(expenses);
    localStorage.setItem(EXPENSES_DATA_KEY, updatedExpensesString);
}