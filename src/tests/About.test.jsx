import { render, screen } from '@testing-library/react';
import About from '../pages/About';

test('renders About Us header', () => {
  render(<About />);
  expect(screen.getByText(/About Us/i)).toBeInTheDocument();
});

test('renders team members', () => {
  render(<About />);
  expect(screen.getByText(/Nimit Jalan/i)).toBeInTheDocument();
  expect(screen.getByText(/Vansh Agarwal/i)).toBeInTheDocument();
  expect(screen.getByText(/Omisha Shetty/i)).toBeInTheDocument();
});

test('renders doctor section', () => {
  render(<About />);
  expect(screen.getByText(/Dr. Puneet Jalan/i)).toBeInTheDocument();
});
