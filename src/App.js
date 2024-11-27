// import React from "react";
// import Form from "./components/Form";
// import View from "./components/View";
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import { Route, Routes } from "react-router-dom";

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/form" element={<Form />} />
//         <Route path="/view" element={<View />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';
import Home from "./components/Home";
import Navbar from './components/Navbar';


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
        </Routes>
      </main>
    </div>
  );
}

export default App;