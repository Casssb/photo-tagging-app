import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import Home from './Home';

describe('Home', () => {
  it('renders correctly', () => {
    render(<Home />);

    const mainContent = screen.getByRole('main');
    expect(mainContent).toBeInTheDocument();
  });
});