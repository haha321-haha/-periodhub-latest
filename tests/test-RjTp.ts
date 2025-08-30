// tests/routing/magic.test.ts
import { generateStaticParams } from '@/app/magic/layout';
import { describe, expect, test } from '@jest/globals';

describe('Magic Routes', () => {
  test('generateStaticParams returns valid paths', async () => {
    const params = await generateStaticParams();
    expect(params).toEqual([
      { id: '1' }, { id: '2' }, { id: '3' }, 
      { id: '4' }, { id: '5' }
    ]);
  });
});