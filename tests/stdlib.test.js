import { test, expect, describe, is } from 'vitest';

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
  compile,
} from '../lib/stdlib.js';
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
    expect(() => anallify('')).toThrowError(Error(ERROR.missingArgument));
  });
});

describe('Stringify', () => {
  test('Decode anal to string', () => {
    expect(stringify(STRINGIFY_INPUT)).toBe(STRINGIFY_CORRECT_OUTPUT);
    expect(stringify(STRINGIFY_INPUT)).not.toBe(STRINGIFY_WRONG_OUTPUT);
  });

  test('Decode with correct chars', () => {
    const ANAL_CHARACTERS = '';
    const charCodeA = ANAL_CHARACTERS.length;
    const charCodeB = ANAL_CHARACTERS.length * 2;

    const anal = `${ANAL_CHARACTERS.repeat(charCodeA)} ${ANAL_CHARACTERS.repeat(charCodeB)}`;

    const result = stringify(anal);
    expect(result).toBe(String.fromCharCode(charCodeA) + String.fromCharCode(charCodeB));
  });

  test('Throw error if argument is not a string', () => {
    expect(() => stringify(1)).toThrowError(Error(ERROR.notString));
  });

  test('Throw error if argument is missing', () => {
    expect(() => stringify('')).toThrowError(Error(ERROR.missingArgument));
  });
});

describe('Run', () => {
  test('Run .anal file', () => {
    expect(run(ANAL_FILE_LOCATION)).toBe(RUN_CORRECT_OUTPUT);
    expect(run(ANAL_FILE_LOCATION)).not.toBe(RUN_WRONG_OUTPUT);
  });

  test('Throw error if file is not found', () => {
    expect(() => run('')).toThrowError(Error(ERROR.fileNotFound));
  });
});

describe('Compile', () => {
  test('Throw error if file is not found', () => {
    expect(() => compile('')).toThrowError(Error(ERROR.fileNotFound));
  });
});
