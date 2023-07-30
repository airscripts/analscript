import {
  vi,
  test,
  expect,
  describe,
} from 'vitest';

import { graceful } from '../lib/utils';

describe('Graceful', () => {
  test('Execute graceful', () => {
    const fn = vi.fn();
    graceful(fn);
    expect(fn).toBeCalled();
  });
});
