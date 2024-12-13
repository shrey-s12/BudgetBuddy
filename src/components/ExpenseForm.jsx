import React, { useContext, useState } from 'react';
import { DateInput, AmountInput, TitleInput, CategoryInput } from './Inputs';
import ExpensesContext from '../context/ExpensesContext';

const emptyForm = () => ({
  date: "",
  amount: "",
  title: "",
  category: ""
});

function formValuesFromExpense(id, expenses) {
  const expense = expenses[id];
  const formValues = {
    ...expense,
  };
  return formValues;
}

const ExpenseForm = ({ onSaveExpense }) => {
  const { expenses, editId } = useContext(ExpensesContext);
  const prefilledForm = editId > -1 ? formValuesFromExpense(editId, expenses) : emptyForm();
  const [formValues, setFormValues] = useState(prefilledForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      ...formValues,
      amount: +formValues.amount,
      category: formValues.category
    }
    onSaveExpense(expense, editId);
    setFormValues(emptyForm());
  };

  const [date, setDate] = [formValues.date, (val => setFormValues((state) => ({ ...state, date: val })))]
  const [amount, setAmount] = [formValues.amount, (val) => setFormValues((state) => ({ ...state, amount: val }))]
  const [title, setTitle] = [formValues.title, (val) => setFormValues((state) => ({ ...state, title: val }))]
  const [category, setCategory] = [formValues.category, (val) => setFormValues((state) => ({ ...state, category: val }))]

  const submitButtonText = editId > -1 ? "Edit Expense" : "Add Expense";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto space-y-4"
    >

      {editId > -1 ?
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Edit Expense</h2>
        : <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Add New Expense</h2>}

      <DateInput
        value={date} onChange={setDate}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <AmountInput
        value={amount} onChange={setAmount}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <TitleInput
        value={title} onChange={setTitle}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <CategoryInput
        selectedCategory={category} onChange={setCategory}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type='submit'
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
      >{submitButtonText}</button>
    </form>

  );
};

export default ExpenseForm;