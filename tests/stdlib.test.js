import { test, expect } from 'vitest';

import * as seed from './seeds.js';
import { anallify, stringify } from '../lib/stdlib.js';

test('Encode string to anal', () => {
  expect(anallify(seed.ANALLIFY_INPUT)).toBe(seed.ANALLIFY_CORRECT_OUTPUT);
  expect(anallify(seed.ANALLIFY_INPUT)).not.toBe(seed.ANALLIFY_WRONG_OUTPUT);
});

test('Decode anal to string', () => {
  expect(stringify(seed.STRINGIFY_INPUT)).toBe(seed.STRINGIFY_CORRECT_OUTPUT);
  expect(stringify(seed.STRINGIFY_INPUT)).not.toBe(seed.STRINGIFY_WRONG_OUTPUT);
});
