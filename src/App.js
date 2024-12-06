import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';
import Home from "./components/Home";
import Navbar from './components/Navbar';
// import ExpensesContext from './context/ExpensesContext';

function App() {
  // const { setToggleView } = useContext(ExpensesContext);

  return (
    <div className="App min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-expenses" element={<ExpenseFormPage />} />
          <Route path="/view-expenses" element={<ExpenseListPage view={true} />} />
          <Route path="/card-expenses" element={<ExpenseListPage view={false} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;