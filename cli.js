import help from './lib/help.js';
import { anallify, stringify } from './lib/stdlib.js';
import { HELP, STRINGIFY, ANALLIFY } from './lib/constants.js';

function cli() {
  let output = '';
  const command = process.argv[2];
  const args = process.argv.slice(3, process.argv.length).join('');

  switch (command) {
    case HELP: process.stdout.write(help); break;
    case ANALLIFY: output = anallify(args); break;
    case STRINGIFY: output = stringify(args); break;
    default: process.stdout.write(help); break;
  }

  process.stdout.write(output);
}

cli();
