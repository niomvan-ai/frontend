import { render, screen, fireEvent } from '@testing-library/react';
import Osteoarthritis from '../pages/Osteoarthritis';

test('renders Osteoarthritis form', () => {
  render(<Osteoarthritis />);
  expect(screen.getByText(/Drag and drop some files here/i)).toBeInTheDocument();
  expect(screen.getByText(/Submit/i)).toBeInTheDocument();
});

test('shows case number after submission', async () => {
  render(<Osteoarthritis />);
  const file = new File(['dummy content'], 'example.png', { type: 'image/png' });
  fireEvent.drop(screen.getByText(/Drag and drop some files here/i), {
    dataTransfer: { files: [file] },
  });
  fireEvent.click(screen.getByText(/Submit/i));
  expect(await screen.findByText(/Suggested Case No for osteoarthritis/i)).toBeInTheDocument();
});
