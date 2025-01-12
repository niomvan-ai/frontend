import { render, screen, fireEvent } from '@testing-library/react';
import Symptoms from '../pages/Symptoms';

test('renders Symptoms form', () => {
  render(<Symptoms />);
  expect(screen.getByLabelText(/Symptoms/i)).toBeInTheDocument();
  expect(screen.getByText(/Submit/i)).toBeInTheDocument();
});

test('shows error message on empty symptoms', () => {
  render(<Symptoms />);
  fireEvent.click(screen.getByText(/Submit/i));
  expect(screen.getByText(/Symptoms field cannot be empty./i)).toBeInTheDocument();
});
