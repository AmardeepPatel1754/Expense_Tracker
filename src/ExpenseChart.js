import React from 'react';

function ExpenseChart({ expenses, budgets }) {
  const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  const categoryExpenses = {};
  expenses.forEach((expense) => {
    const category = expense.category;
    categoryExpenses[category] = (categoryExpenses[category] || 0) + parseFloat(expense.amount);
  });

  return (
    <div>
      <h2>Expense Summary</h2>
      <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
    </div>
  );
}

export default ExpenseChart;
