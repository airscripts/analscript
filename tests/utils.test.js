// import {
//   vi,
//   test,
//   expect,
//   describe,
// } from 'vitest';
import { describe, it, mock } from 'node:test';
import { deepEqual } from 'node:assert/strict';
import { graceful } from '../lib/utils.js';
import { EMPTY_STRING_INPUT } from './seeds.js';

describe('Graceful', () => {
  it('Execute graceful', () => {
    const fn = mock.fn();
    graceful(fn);
    deepEqual(fn.mock.calls.length, 1);
  });

  it('Trigger graceful exit', () => {
    const fn = mock.method(process, 'exit', () => {});
    graceful(EMPTY_STRING_INPUT);
    deepEqual(fn.mock.calls.length, 1);
  });
});
