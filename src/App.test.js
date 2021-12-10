import { render, screen } from '@testing-library/react';
import App from './App';

test('renders 3 problem cards', () => {
  render(<App />);
  const problemElements = screen.getAllByText(/Problem/i);
  expect(problemElements.length).toBe(3);
});
