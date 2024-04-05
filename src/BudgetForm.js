// BudgetForm.js
import React, { useState } from 'react';

function BudgetForm({ onSetBudget }) {
  const [budget, setBudget] = useState('');

  const handleChange = (e) => {
    setBudget(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSetBudget(parseFloat(budget));
  };

  return (
    <div>
      <h2>Set Budget for the Month</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" value={budget} onChange={handleChange} placeholder="Enter Budget" />
        <button type="submit">Set Budget</button>
      </form>
    </div>
  );
}

export default BudgetForm;