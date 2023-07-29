import checker from './utils.js';
import { ANAL_CHARACTERS } from './constants.js';

export function anallify(string) {
  if (!checker(string)) {
    process.stderr.write('Only strings are accepted!\n');
    process.exit(1);
  }

  if (!string) {
    process.stderr.write('Missing argument!\n');
    process.exit(1);
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
    process.stderr.write('Only strings are accepted!\n');
    process.exit(1);
  }

  if (!anal) {
    process.stderr.write('Missing argument!\n');
    process.exit(1);
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
