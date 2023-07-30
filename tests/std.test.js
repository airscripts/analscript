import fs from 'node:fs';
import { test, expect, describe } from 'vitest';

import {
  FILE_LOCATION,
  NUMERIC_INPUT,
  ANALLIFY_INPUT,
  STRINGIFY_INPUT,
  RUN_WRONG_OUTPUT,
  ANAL_FILE_LOCATION,
  EMPTY_STRING_INPUT,
  RUN_CORRECT_OUTPUT,
  ANALLIFY_WRONG_OUTPUT,
  STRINGIFY_WRONG_OUTPUT,
  COMPILE_CORRECT_OUTPUT,
  COMPILED_FILE_LOCATION,
  ANALLIFY_CORRECT_OUTPUT,
  STRINGIFY_CORRECT_OUTPUT,
} from './seeds.js';

import {
  run,
  anallify,
  stringify,
  compile,
} from '../lib/std.js';
import { ERROR } from '../lib/dictionary.js';

describe('Anallify', () => {
  test('Encode string to anal', () => {
    expect(anallify(ANALLIFY_INPUT)).toBe(ANALLIFY_CORRECT_OUTPUT);
    expect(anallify(ANALLIFY_INPUT)).not.toBe(ANALLIFY_WRONG_OUTPUT);
  });

  test('Throw error if argument is not a string', () => {
    expect(() => anallify(1)).toThrowError(Error(ERROR.notString));
  });

  test('Throw error if argument is missing', () => {
    expect(() => anallify(EMPTY_STRING_INPUT)).toThrowError(
      Error(ERROR.missingArgument),
    );
  });
});

describe('Stringify', () => {
  test('Decode anal to string', () => {
    expect(stringify(STRINGIFY_INPUT)).toBe(STRINGIFY_CORRECT_OUTPUT);
    expect(stringify(STRINGIFY_INPUT)).not.toBe(STRINGIFY_WRONG_OUTPUT);
  });

  test('Throw error if argument is not a string', () => {
    expect(() => stringify(NUMERIC_INPUT)).toThrowError(
      Error(ERROR.notString),
    );
  });

  test('Throw error if argument is missing', () => {
    expect(() => stringify(EMPTY_STRING_INPUT)).toThrowError(
      Error(ERROR.missingArgument),
    );
  });
});

describe('Run', () => {
  test('Run .anal file', () => {
    expect(run(ANAL_FILE_LOCATION)).toBe(RUN_CORRECT_OUTPUT);
    expect(run(ANAL_FILE_LOCATION)).not.toBe(RUN_WRONG_OUTPUT);
  });

  test('Throw error if file is not found', () => {
    expect(() => run(EMPTY_STRING_INPUT)).toThrowError(
      Error(ERROR.fileNotFound),
    );
  });
});

describe('Compile', () => {
  test('Compile file to .anal', () => {
    expect(compile(FILE_LOCATION)).toBe(COMPILE_CORRECT_OUTPUT);
    fs.rmSync(COMPILED_FILE_LOCATION);
  });

  test('Throw error if file is not found', () => {
    expect(() => compile(EMPTY_STRING_INPUT)).toThrowError(
      Error(ERROR.fileNotFound),
    );
  });
});
