const version = 'Analscript, version 1.2.0';
const copyright = '\nCopyright (c) 2023 by Airscript\n';

const usage = `
Usage:
  analscript command [options] [arguments]
`;

const commands = `
Commands:
  run                     Run a .anal file
  compile                 Compile any file to .anal
  anallify                Encode string to anal
  stringify               Decode anal to string
  help                    Show this help
`;

const options = `
Options:
  Nothing to see here
`;

const args = `
Arguments:
  Nothing to see here
`;

const help = `${version} ${copyright} ${usage} ${commands} ${options} ${args}`;
export default help;
