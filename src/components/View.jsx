import React from "react";

const View = () => {
  let expenses = localStorage.getItem("expenses")
    ? JSON.parse(localStorage.getItem("expenses"))
    : [];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="overflow-x-auto w-full max-w-4xl bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-blue-600 text-center my-4">
          BudgetBuddy - View Expenses
        </h1>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Delete Button</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length > 0 ? (
              expenses.map((expense, index) => (
                <tr
                  key={index}
                  className={`text-center ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                  }`}
                >
                  <td className="border px-4 py-2">{expense.title}</td>
                  <td className="border px-4 py-2">{expense.price}</td>
                  <td className="border px-4 py-2">{expense.date}</td>
                  <td className="border px-4 py-2">{expense.category}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => {
                        expenses = expenses.filter((e) => e !== expense);
                        localStorage.setItem(
                          "expenses",
                          JSON.stringify(expenses)
                        );
                        window.location.reload();
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 py-4">
                  No expenses to display.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;
