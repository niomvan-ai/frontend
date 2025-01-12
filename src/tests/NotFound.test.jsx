import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

test('renders 404 message', () => {
  renderWithRouter(<NotFound />);
  expect(screen.getByText(/404/i)).toBeInTheDocument();
  expect(screen.getByText(/The page you're looking for doesn't exist./i)).toBeInTheDocument();
});

test('renders Go Home link', () => {
  renderWithRouter(<NotFound />);
  expect(screen.getByText(/Go Home/i)).toBeInTheDocument();
});
