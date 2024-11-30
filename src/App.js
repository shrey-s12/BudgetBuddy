import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';
import Home from "./components/Home";
import Navbar from './components/Navbar';
import { getExpensesFromBackend, setExpensesInBackend } from './service/localStorage';

function App() {
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

  return (
    <div className="App min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-expenses" element={<ExpenseFormPage expenses={expenses} setExpenses={setExpenses} editIndex={editIndex} setEditIndex={setEditIndex} />} />
          <Route path="/view-expenses" element={<ExpenseListPage expenses={expenses} setExpenses={setExpenses} setEditIndex={setEditIndex} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;