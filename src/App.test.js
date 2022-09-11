import { render, screen } from '@testing-library/react';
import GrammarThemesDrillWrapper from './grammar-themes-drill/GrammarThemesDrillWrapper';

test('renders learn react link', () => {
  render(<GrammarThemesDrillWrapper />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
