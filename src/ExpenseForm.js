// ExpenseForm.js
import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [expense, setExpense] = useState({ description: '', amount: '', });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(expense);
    setExpense({ description: '', amount: '',});
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="description" placeholder="Description" value={expense.description} onChange={handleChange} />
        <input type="number" name="amount" placeholder="Amount" value={expense.amount} onChange={handleChange} />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;




