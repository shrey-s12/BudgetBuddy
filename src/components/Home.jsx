import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">Welcome to BudgetBuddy</h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          Keep track of your daily expenses effortlessly. Manage your finances efficiently by adding, categorizing,
          and reviewing your expenses in one place. Empower yourself with a clear view of your spending habits.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <i className="fas fa-plus text-blue-600 text-2xl"></i>
            </div>
            <h2 className="text-lg font-bold text-blue-600">Add Expenses</h2>
            <p className="text-gray-600 text-center">Log your daily expenses with ease.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <i className="fas fa-list text-blue-600 text-2xl"></i>
            </div>
            <h2 className="text-lg font-bold text-blue-600">Categorize Expenses</h2>
            <p className="text-gray-600 text-center">Organize your spending by categories.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <i className="fas fa-chart-pie text-blue-600 text-2xl"></i>
            </div>
            <h2 className="text-lg font-bold text-blue-600">Track Insights</h2>
            <p className="text-gray-600 text-center">Analyze your spending patterns easily.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
