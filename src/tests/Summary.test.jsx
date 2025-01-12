import { render, screen, fireEvent } from '@testing-library/react';
import Summary from '../pages/Summary';

test('renders Summary form', () => {
  render(<Summary />);
  expect(screen.getByLabelText(/Symptoms/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Doctor Recommendations/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Case and Condition/i)).toBeInTheDocument();
  expect(screen.getByText(/Submit/i)).toBeInTheDocument();
});

test('shows error message on empty fields', () => {
  render(<Summary />);
  fireEvent.click(screen.getByText(/Submit/i));
  expect(screen.getByText(/All fields are required./i)).toBeInTheDocument();
});
