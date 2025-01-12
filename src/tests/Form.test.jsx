import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Form from '../components/Form';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

test('renders login form', () => {
  renderWithRouter(<Form route="/token/" method="login" />);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
});

test('renders register form', () => {
  renderWithRouter(<Form route="/user/register/" method="register" />);
  expect(screen.getByText(/Register/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
});

test('shows error message on empty username', async () => {
  renderWithRouter(<Form route="/user/register/" method="register" />);
  fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password' } });
  fireEvent.click(screen.getByText(/Register/i));
  expect(await screen.findByText(/The username is already taken./i)).toBeInTheDocument();
});
