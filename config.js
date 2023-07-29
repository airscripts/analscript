import fs from 'node:fs';

const VERSION = fs.readFileSync('./VERSION', 'utf-8');
export default VERSION;
