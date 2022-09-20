import { render, screen } from '@testing-library/react';
import GrammarThemesDrillWrapper from './no-theory-drills/grammar-themes-drill/GrammarThemesDrillWrapper';

test('renders learn react link', () => {
  render(<GrammarThemesDrillWrapper />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
