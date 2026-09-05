import {StrictMode} from "react";

const TransactionList = ({ transactions }) => {
  if (transactions.length === 0) {
    return <p className="empty">No transactions found.</p>;
  }

  const total = transactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      <div className="total">Total Balance: ${total.toFixed(2)}</div>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="transaction-item">
            <span className="description">{transaction.description}</span>
            <span className={`amount ${transaction.amount >= 0 ? 'positive' : 'negative'}`}>
              ${transaction.amount.toFixed(2)}
            </span>
            <span className="date">{transaction.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;