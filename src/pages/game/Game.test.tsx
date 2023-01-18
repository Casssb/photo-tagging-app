import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import Game from './Game';

vi.mock('react-router-dom', async () => {
  const actual: {} = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: () => ({
      id: 'game1',
    }),
  };
});

describe('Game', () => {
  it('renders correctly', () => {
    render(<Game />);

    const mainContent = screen.getByRole('main');
    expect(mainContent).toBeInTheDocument();
  });
});
