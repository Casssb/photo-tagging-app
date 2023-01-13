import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import Game from './Game';

describe('Game', () => {
  it('renders correctly', () => {
    render(<Game />);

    const mainContent = screen.getByRole('main');
    expect(mainContent).toBeInTheDocument();
  });
});