import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = { title, price, date, category };
    console.log(expense);

    let existingData = JSON.parse(localStorage.getItem("expenses")) || [];
    existingData.push(expense);
    localStorage.setItem("expenses", JSON.stringify(existingData));
    navigate("/view");
  };

  return (
    <div className="form-container">
      <form className="expense-form" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="form-header">Expense Tracker Form</h1>

        <label htmlFor="title">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          placeholder="Enter expense title"
        />

        <label htmlFor="price">Price</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          id="price"
          placeholder="Enter amount"
        />

        <label htmlFor="date">Date</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          id="date"
        />

        <label htmlFor="category">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          name="category"
          id="category"
        >
          <option value="SelectCategory">Select category</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="shopping">Shopping</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="others">Others</option>
        </select>

        <button type="submit" className="submit-button">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default Form;
