import { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Groceries', amount: -150.50, date: '2024-01-15' },
    { id: 2, description: 'Salary', amount: 3000.00, date: '2024-01-01' },
    { id: 3, description: 'Rent', amount: -1200.00, date: '2024-01-01' },
    { id: 4, description: 'Dinner', amount: -45.75, date: '2024-01-14' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');

  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [
      ...prev,
      { ...newTransaction, id: Date.now() },
    ]);
  };

  const filteredTransactions = transactions.filter((t) =>
    t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="app">
      <h1> Banking App</h1>
      <div className="controls">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <div className="sort-control">
          <label>Sort: </label>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </select>
        </div>
      </div>
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList transactions={sortedTransactions} />
    </div>
  );
};

export default App;