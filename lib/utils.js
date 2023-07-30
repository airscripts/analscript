export function checker(input) {
  return typeof input === 'string';
}

export function graceful(fn) {
  try {
    fn();
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    process.exit(1);
  }
}
