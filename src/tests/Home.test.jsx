import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

test('renders welcome message', () => {
  localStorage.setItem('username', 'testuser');
  renderWithRouter(<Home />);
  expect(screen.getByText(/Welcome, testuser!/i)).toBeInTheDocument();
});

test('renders feature cards', () => {
  renderWithRouter(<Home />);
  expect(screen.getByText(/Symptom analysis/i)).toBeInTheDocument();
  expect(screen.getByText(/Osteoarthritis analysis/i)).toBeInTheDocument();
  expect(screen.getByText(/Analisis and summary/i)).toBeInTheDocument();
});
