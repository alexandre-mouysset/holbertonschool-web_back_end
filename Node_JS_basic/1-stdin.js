console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (callback) => {
  console.log(`Your name is: ${callback.toString().trim()}`);
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
