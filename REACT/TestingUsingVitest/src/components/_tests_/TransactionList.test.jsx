import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TransactionList from '../TransactionList';

const mockTransactions = [
  { id: 1, description: 'Salary', amount: 3000.00, date: '2024-01-01' },
  { id: 2, description: 'Groceries', amount: -150.50, date: '2024-01-15' },
];

describe('TransactionList', () => {
  it('renders all transactions', () => {
    render(<TransactionList transactions={mockTransactions} />);

    expect(screen.getByText('Salary')).toBeInTheDocument();
    expect(screen.getByText('Groceries')).toBeInTheDocument();
    expect(screen.getByText('$3000.00')).toBeInTheDocument();
    expect(screen.getByText('-$150.50')).toBeInTheDocument();
  });

  it('shows correct total balance', () => {
    render(<TransactionList transactions={mockTransactions} />);

    expect(screen.getByText(/Total Balance: \$2849.50/i)).toBeInTheDocument();
  });

  it('shows positive amounts in green', () => {
    render(<TransactionList transactions={mockTransactions} />);

    const positiveAmount = screen.getByText('$3000.00');
    expect(positiveAmount).toHaveClass('positive');
  });

  it('shows negative amounts in red', () => {
    render(<TransactionList transactions={mockTransactions} />);

    const negativeAmount = screen.getByText('-$150.50');
    expect(negativeAmount).toHaveClass('negative');
  });

  it('displays empty message when no transactions', () => {
    render(<TransactionList transactions={[]} />);

    expect(screen.getByText('No transactions found.')).toBeInTheDocument();
  });
});