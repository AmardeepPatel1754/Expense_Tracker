// App.js
import React, { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import BudgetForm from './BudgetForm';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  const [notification, setNotification] = useState(null);

  const handleSetBudget = (newBudget) => {
    setBudget(newBudget);
    localStorage.setItem('budget', newBudget);
    setNotification(null);
  };

  useEffect(() => {
    const storedBudget = parseFloat(localStorage.getItem('budget'));
    if (!isNaN(storedBudget)) {
      setBudget(storedBudget);
    } else {
      setNotification('Please set a budget for the month.');
    }

    return () => {
      localStorage.removeItem('budget');
    };
  }, []);

  const handleAddExpense = (expense) => {
    const amount = parseFloat(expense.amount);
    const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
    
    if (!budget) {
      setNotification('Please set a budget for the month before adding expenses.');
    } else if (totalExpenses + amount > budget) {
      setNotification(`Warning: The total expenses have reached the budget limit of $${budget}`);
    } else {
      setExpenses([...expenses, expense]);
      setNotification(null);
    }
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Tracker</h1>
      </header>
      <div className="container">
        <div className="sidebar">
          <BudgetForm onSetBudget={handleSetBudget} />
        </div>
        <div className="main">
          {notification && <p className="notification">{notification}</p>}
          <ExpenseForm onAddExpense={handleAddExpense} />
          <div className="data-container">
            <ExpenseList expenses={expenses} />
            <ExpenseChart expenses={expenses} budget={budget} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;