import fs from 'node:fs';

import { checker } from './utils.js';
import { ERROR, SUCCESS } from './dictionary.js';
import { ANAL_CHARACTERS } from './constants.js';
import { matcher, sequence } from './regexp.js';

export function anallify(string) {
  if (!checker(string)) {
    throw new Error(ERROR.notString);
  }

  if (!string) {
    throw new Error(ERROR.missingArgument);
  }

  let anal = '';
  const characters = string.split('');

  for (let index = 0; index < characters.length; index += 1) {
    const character = characters[index];
    const fragment = ANAL_CHARACTERS.repeat(character.charCodeAt(0));
    anal = anal.concat(fragment).concat(' ');
  }

  return anal.trimEnd();
}

export function stringify(anal) {
  if (!checker(anal)) {
    throw new Error(ERROR.notString);
  }

  if (!anal) {
    throw new Error(ERROR.missingArgument);
  }

  if (!matcher.test(anal)) {
    throw new Error(ERROR.notAcceptedByGrammar);
  }

  let string = '';
  const fragments = anal.split(' ');

  for (let index = 0; index < fragments.length; index += 1) {
    const fragment = fragments[index];
    const character = String.fromCharCode(((fragment.match(sequence)).length));
    string = string.concat(character);
  }

  return string;
}

export function run(file) {
  let contents = null;

  try {
    contents = fs.readFileSync(file, { encoding: 'utf-8' });
  } catch (error) {
    throw new Error(ERROR.fileNotFound);
  }

  return stringify(contents);
}

export function compile(file) {
  let contents = null;
  const fileOptions = { encoding: 'utf-8' };

  try {
    contents = fs.readFileSync(file, fileOptions);
  } catch (error) {
    throw new Error(ERROR.fileNotFound);
  }

  let filename = file.split('.');
  filename = filename.filter((element, index) => index < filename.length - 1);
  filename = filename.join('.');

  fs.writeFileSync(`${filename}.anal`, anallify(contents), fileOptions);
  process.stdout.write(`${SUCCESS.compileSuccess}`);
  return true;
}
