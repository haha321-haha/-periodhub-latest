// tests/routing/navigation.test.ts
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Link from 'next/link';

test('Navigation works correctly', async () => {
  render(<Link href="/magic/1">Go to Charm 1</Link>);
  const link = screen.getByText(/Go to Charm 1/i);
  await userEvent.click(link);
  expect(window.location.pathname).toBe('/magic/1');
});