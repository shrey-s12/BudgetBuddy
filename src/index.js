import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ExpensesProvider } from './context/ExpensesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ExpensesProvider>
        <App />
      </ExpensesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
