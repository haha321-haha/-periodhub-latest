import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/router';

// Mock Next.js 路由
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('Navigation', () => {
  it('should handle link click', async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: mockPush
    }));

    render(
      <Link href="/magic/1" legacyBehavior>
        <a>Go to Charm 1</a>
      </Link>
    );

    await userEvent.click(screen.getByText(/Go to Charm 1/i));
    expect(mockPush).toHaveBeenCalledWith('/magic/1');
  });
});