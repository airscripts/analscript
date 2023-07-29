import fs from 'node:fs';

import checker from './utils.js';
import { ERROR, SUCCESS } from './dictionary.js';
import { ANAL_CHARACTERS } from './constants.js';

export function anallify(string) {
  if (!checker(string)) {
    process.stderr.write(`${ERROR.notString}\n`);
    return process.exit(1);
  }

  if (!string) {
    process.stderr.write(`${ERROR.missingArgument}\n`);
    return process.exit(1);
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
    process.stderr.write(`${ERROR.notString}\n`);
    return process.exit(1);
  }

  if (!anal) {
    process.stderr.write(`${ERROR.missingArgument}\n`);
    return process.exit(1);
  }

  let string = '';
  const fragments = anal.split(' ');
  const rule = new RegExp(`${ANAL_CHARACTERS}`, 'g');

  for (let index = 0; index < fragments.length; index += 1) {
    const fragment = fragments[index];
    const character = String.fromCharCode(((fragment.match(rule) || []).length));
    string = string.concat(character);
  }

  return string;
}

export function run(file) {
  try {
    const contents = fs.readFileSync(file, { encoding: 'utf-8' });
    return stringify(contents);
  } catch (error) {
    process.stderr.write(`${ERROR.fileNotFound}\n`);
    return process.exit(1);
  }
}

export function compile(file) {
  try {
    const contents = fs.readFileSync(file, { encoding: 'utf-8' });

    let filename = file.split('.');
    filename = filename.filter((element, index) => index < filename.length - 1);
    filename = filename.join('.');

    fs.writeFileSync(`${filename}.anal`, anallify(contents), { encoding: 'utf-8' });
    process.stdout.write(`${SUCCESS.compileSuccess}`);
  } catch (error) {
    process.stderr.write(`${ERROR.fileNotFound}\n`);
    process.exit(1);
  }
}
