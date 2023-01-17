import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import HeaderResponsive from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    render(<HeaderResponsive />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
  it('renders with the correct number of links', () => {
    render(<HeaderResponsive />);

    const links = screen.queryAllByRole('link');
    expect(links.length).toBe(3);
  });
});
