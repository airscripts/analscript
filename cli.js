#!/usr/bin/env node
import help from './lib/help.js';
import { graceful } from './lib/utils.js';

import {
  run,
  compile,
  anallify,
  stringify,
} from './lib/std.js';

import {
  RUN,
  HELP,
  COMPILE,
  ANALLIFY,
  STRINGIFY,
} from './lib/constants.js';

function cli() {
  let output = '';
  const command = process.argv[2];
  const args = process.argv.slice(3, process.argv.length).join('');

  switch (command) {
    case COMPILE: compile(args); break;
    case RUN: output = run(args); break;
    case HELP: process.stdout.write(help); return;
    case ANALLIFY: output = anallify(args); break;
    case STRINGIFY: output = stringify(args); break;
    default: process.stdout.write(help); return;
  }

  process.stdout.write(`${output}\n`);
}

graceful(cli());
