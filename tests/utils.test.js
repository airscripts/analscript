import {
  vi,
  test,
  expect,
  describe,
} from 'vitest';

import { graceful } from '../lib/utils.js';
import { EMPTY_STRING_INPUT } from './seeds.js';

describe('Graceful', () => {
  test('Execute graceful', () => {
    const fn = vi.fn();
    graceful(fn);
    expect(fn).toBeCalled();
  });

  test('Trigger graceful exit', () => {
    const processExit = vi.spyOn(process, 'exit').mockImplementation(() => {});
    graceful(EMPTY_STRING_INPUT);
    expect(processExit).toHaveBeenCalled();
  });
});
