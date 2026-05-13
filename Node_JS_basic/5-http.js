const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });

	if (req.url === '/') {
		res.end('Hello Holberton School!');
	} else if (req.url === '/students') {
		const database = process.argv[2];

		countStudents(database)
			.then(() => {
				res.end('This is the list of our students');
			})
			.catch((err) => {
				res.end(`This is the list of our students\n${err.message}`);
			});
	} else {
		res.end('Hello Holberton School!');
	}
});

module.exports = app;