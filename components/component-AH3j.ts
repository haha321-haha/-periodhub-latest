// tests/routing/navigation.test.ts
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Mock Next.js 路由系统
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn()
  }))
}));

describe('Navigation Component', () => {
  it('should trigger router navigation when clicking links', async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: mockPush
    }));

    // 渲染包含自定义标签的组件
    render(
      <Link href="/magic/1" legacyBehavior passHref>
        <a data-testid="magic-link">Go to Charm 1</a>
      </Link>
    );

    // 模拟用户点击
    await userEvent.click(screen.getByTestId('magic-link'));
    
    // 验证路由调用
    expect(mockPush).toHaveBeenCalledWith('/magic/1');
  });

  // 修复图片中的 HTML 嵌套错误
  it('should render valid HTML structure', () => {
    const { container } = render(
      <nav>
        <Link href="/">Home</Link>
      </nav>
    );
    expect(container).toMatchSnapshot();
  });
});