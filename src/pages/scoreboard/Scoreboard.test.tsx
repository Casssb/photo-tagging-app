import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import Scoreboard from './Scoreboard';

describe('Scoreboard', () => {
  it('renders correctly', () => {
    render(<Scoreboard />);

    const mainContent = screen.getByRole('main');
    expect(mainContent).toBeInTheDocument();
  });
});