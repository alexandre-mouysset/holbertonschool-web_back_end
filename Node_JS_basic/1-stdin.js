console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (callback) => {
  const input = callback.toString().trim();
  console.log(`Your name is: ${input}`);
  console.log('This important software is now closing');
  process.exit();
});
