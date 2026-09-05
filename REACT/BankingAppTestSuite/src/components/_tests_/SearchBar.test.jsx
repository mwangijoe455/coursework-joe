import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {
  it('renders with initial search term', () => {
    render(<SearchBar searchTerm="test" onSearchChange={() => {}} />);

    const input = screen.getByLabelText(/search transactions/i);
    expect(input).toHaveValue('test');
  });

  it('calls onSearchChange when typing', () => {
    const mockChange = vi.fn();
    render(<SearchBar searchTerm="" onSearchChange={mockChange} />);

    const input = screen.getByLabelText(/search transactions/i);
    fireEvent.change(input, { target: { value: 'rent' } });

    expect(mockChange).toHaveBeenCalledWith('rent');
  });

  it('renders placeholder text', () => {
    render(<SearchBar searchTerm="" onSearchChange={() => {}} />);

    const input = screen.getByPlaceholderText(/🔍 Search transactions.../i);
    expect(input).toBeInTheDocument();
  });
});