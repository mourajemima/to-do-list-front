import { render, screen } from '@testing-library/react';
import Home from './pages/Home';
import '@testing-library/jest-dom';

test('renderiza o título da página', () => {
  render(<Home />);
  const titulo = screen.getByText(/to-do list/i);
  expect(titulo).toBeInTheDocument();
});
