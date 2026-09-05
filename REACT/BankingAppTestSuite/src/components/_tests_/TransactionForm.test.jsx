import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TransactionForm from '../TransactionForm';

describe('TransactionForm', () => {
  it('renders all form inputs', () => {
    render(<TransactionForm onAddTransaction={() => {}} />);

    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/amount/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add transaction/i })).toBeInTheDocument();
  });

  it('calls onAddTransaction with correct data when submitted', () => {
    const mockAdd = vi.fn();
    render(<TransactionForm onAddTransaction={mockAdd} />);

    const descriptionInput = screen.getByLabelText(/description/i);
    const amountInput = screen.getByLabelText(/amount/i);
    const dateInput = screen.getByLabelText(/date/i);
    const submitButton = screen.getByRole('button', { name: /add transaction/i });

    fireEvent.change(descriptionInput, { target: { value: 'Test Purchase' } });
    fireEvent.change(amountInput, { target: { value: '100.50' } });
    fireEvent.change(dateInput, { target: { value: '2024-01-20' } });
    fireEvent.click(submitButton);

    expect(mockAdd).toHaveBeenCalledWith({
      description: 'Test Purchase',
      amount: 100.50,
      date: '2024-01-20',
    });
  });

  it('does not submit with empty fields', () => {
    const mockAdd = vi.fn();
    render(<TransactionForm onAddTransaction={mockAdd} />);

    const submitButton = screen.getByRole('button', { name: /add transaction/i });
    fireEvent.click(submitButton);

    expect(mockAdd).not.toHaveBeenCalled();
  });

  it('clears form inputs after successful submission', () => {
    const mockAdd = vi.fn();
    render(<TransactionForm onAddTransaction={mockAdd} />);

    const descriptionInput = screen.getByLabelText(/description/i);
    const amountInput = screen.getByLabelText(/amount/i);
    const dateInput = screen.getByLabelText(/date/i);
    const submitButton = screen.getByRole('button', { name: /add transaction/i });

    fireEvent.change(descriptionInput, { target: { value: 'Test' } });
    fireEvent.change(amountInput, { target: { value: '50' } });
    fireEvent.change(dateInput, { target: { value: '2024-01-20' } });
    fireEvent.click(submitButton);

    expect(descriptionInput.value).toBe('');
    expect(amountInput.value).toBe('');
    expect(dateInput.value).toBe('');
  });
});