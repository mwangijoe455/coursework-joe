import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim() || !amount || !date) return;

    const newTransaction = {
      description: description.trim(),
      amount: parseFloat(amount),
      date,
    };

    onAddTransaction(newTransaction);
    setDescription('');
    setAmount('');
    setDate('');
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          aria-label="Description"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          aria-label="Amount"
          step="0.01"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          aria-label="Date"
        />
        <button type="submit">Add Transaction</button>
      </div>
    </form>
  );
};

export default TransactionForm;