// console.log('Welcome to Holberton School, what is your name?');

// process.stdin.on('data', (callback) => {
//   const input = callback.toString().trim();
//   console.log(`Your name is: ${input}`);

//   process.exit();
// });

// process.on('exit', () => {
//   console.log('This important software is now closing');
// });

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const input = process.stdin.read();

  if (input) {
    process.stdout.write(`Your name is: ${input.toString()}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

// Qu'il aille se faire foutre ce checker Implicite on sait pas ce qu'il attend
