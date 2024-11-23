import React from 'react';
import { DateInput, AmountInput, TitleInput, CategoryInput } from './Inputs';

const ExpenseForm = ({ onSaveExpense, formValues, setFormValue, resetFormValues }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveExpense({
      date: formValues.date,
      amount: formValues.amount,
      title: formValues.title,
      category: formValues.category,
    }, formValues.index);
    resetFormValues()
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto space-y-4"
    >

      {formValues['index'] ?
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Edit Expense</h2>
        : <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Add New Expense</h2>}

      <DateInput
        value={formValues['date']} onChange={val => setFormValue(val, 'date')}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <AmountInput
        value={formValues['amount']} onChange={val => setFormValue(val, 'amount')}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <TitleInput
        value={formValues['title']} onChange={val => setFormValue(val, 'title')}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <CategoryInput
        selectedCategory={formValues['category']} onChange={val => setFormValue(val, 'category')}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {
        formValues['index']
          ? (<button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            Edit Expense
          </button>)
          :
          (<button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            Add Expense
          </button>)}
    </form>

  );
};

export default ExpenseForm;