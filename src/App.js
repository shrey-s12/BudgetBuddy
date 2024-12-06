import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';
import Home from "./components/Home";
import Navbar from './components/Navbar';
import ExpenseCardPage from './pages/ExpenseCardPage';

function App() {

  return (
    <div className="App min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-expenses" element={<ExpenseFormPage />} />
          <Route path="/view-expenses" element={<ExpenseListPage />} />
          <Route path="/card-expenses" element={<ExpenseCardPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;