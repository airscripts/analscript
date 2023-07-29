import { test, expect } from 'vitest';

import {
  ANALLIFY_INPUT,
  STRINGIFY_INPUT,
  RUN_WRONG_OUTPUT,
  ANAL_FILE_LOCATION,
  RUN_CORRECT_OUTPUT,
  ANALLIFY_WRONG_OUTPUT,
  STRINGIFY_WRONG_OUTPUT,
  ANALLIFY_CORRECT_OUTPUT,
  STRINGIFY_CORRECT_OUTPUT,
} from './seeds.js';

import {
  run,
  anallify,
  stringify,
} from '../lib/stdlib.js';

test('Encode string to anal', () => {
  expect(anallify(ANALLIFY_INPUT)).toBe(ANALLIFY_CORRECT_OUTPUT);
  expect(anallify(ANALLIFY_INPUT)).not.toBe(ANALLIFY_WRONG_OUTPUT);
});

test('Decode anal to string', () => {
  expect(stringify(STRINGIFY_INPUT)).toBe(STRINGIFY_CORRECT_OUTPUT);
  expect(stringify(STRINGIFY_INPUT)).not.toBe(STRINGIFY_WRONG_OUTPUT);
});

test('Run .anal file', () => {
  expect(run(ANAL_FILE_LOCATION)).toBe(RUN_CORRECT_OUTPUT);
  expect(run(ANAL_FILE_LOCATION)).not.toBe(RUN_WRONG_OUTPUT);
});
