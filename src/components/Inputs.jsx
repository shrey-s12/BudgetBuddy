import React from 'react';

export const DateInput = ({ value, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Date:</label>
            <input 
                type="date" 
                value={value} 
                onChange={(e) => onChange(e.target.value)} 
                required 
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export const AmountInput = ({ value, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount:</label>
            <input 
                type="number" 
                value={value} 
                onChange={(e) => onChange(e.target.value)} 
                required 
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export const TitleInput = ({ value, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Title:</label>
            <input 
                type="text" 
                value={value} 
                onChange={(e) => onChange(e.target.value)} 
                required 
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

const categories = [
    "Entertainment", "Food", "Groceries", "Gift", "Apparel", "Self Care",
    "Donation", "Capital Expense", "Travel", "Repair", "Medical",
    "Miscellaneous", "Petrol"
];

export const CategoryInput = ({ onChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Category:</label>
            <select 
                onChange={(e) => onChange(e.target.value)} 
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="" disabled selected>Select a category</option>
                {categories.map(category => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};