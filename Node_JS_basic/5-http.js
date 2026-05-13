const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  if (request.url === '/') {
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    countStudents(database).then((result) => {
      response.end(`This is the list of our students\n${result}`);
    }).catch((error) => {
      response.end(`This is the list of our students\n${error}`);
    });
  } else {
    response.end('Hello Holberton School!');
  }
});
app.listen(1245);
module.exports = app;
