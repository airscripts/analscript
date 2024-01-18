import fs from 'node:fs';
import { describe, it } from 'node:test';
import { deepEqual, notDeepEqual, throws } from 'node:assert/strict';

import {
  FILE_LOCATION,
  NUMERIC_INPUT,
  ANALLIFY_INPUT,
  STRINGIFY_INPUT,
  RUN_WRONG_OUTPUT,
  ANAL_FILE_LOCATION,
  EMPTY_STRING_INPUT,
  NOT_ACCEPTED_INPUT,
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
  it('Encode string to anal', () => {
    deepEqual(anallify(ANALLIFY_INPUT), ANALLIFY_CORRECT_OUTPUT);
    notDeepEqual(anallify(ANALLIFY_INPUT), ANALLIFY_WRONG_OUTPUT);
  });

  it('Throw error if argument is not a string', () => {
    throws(() => anallify(1), Error(ERROR.notString));
  });

  it('Throw error if argument is missing', () => {
    throws(() => anallify(EMPTY_STRING_INPUT), Error(ERROR.missingArgument));
  });
});

describe('Stringify', () => {
  it('Decode anal to string', () => {
    deepEqual(stringify(STRINGIFY_INPUT), STRINGIFY_CORRECT_OUTPUT);
    notDeepEqual(stringify(STRINGIFY_INPUT), STRINGIFY_WRONG_OUTPUT);
  });

  it('Throw error if argument is not a string', () => {
    throws(() => stringify(1), Error(ERROR.notString));
  });

  it('Throw error if argument is missing', () => {
    throws(() => stringify(EMPTY_STRING_INPUT), Error(ERROR.missingArgument));
  });

  it('Throw error if there are grammar-refused characters', () => {
    throws(() => stringify(NOT_ACCEPTED_INPUT), Error(ERROR.notAcceptedByGrammar));
  });
});

describe('Run', () => {
  it('Run .anal file', () => {
    deepEqual(run(ANAL_FILE_LOCATION), RUN_CORRECT_OUTPUT);
    notDeepEqual(run(ANAL_FILE_LOCATION), RUN_WRONG_OUTPUT);
  });

  it('Throw error if file is not found', () => {
    throws(() => run(NUMERIC_INPUT), Error(ERROR.fileNotFound));
  });
});

describe('Compile', () => {
  it('Compile file to .anal', (t) => {
    t.after(() => fs.rmSync(COMPILED_FILE_LOCATION));

    deepEqual(compile(FILE_LOCATION), COMPILE_CORRECT_OUTPUT);
  });

  it('Throw error if file is not found', () => {
    throws(() => compile(NUMERIC_INPUT), Error(ERROR.fileNotFound));
  });
});
