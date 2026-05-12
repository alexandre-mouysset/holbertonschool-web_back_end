const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').split('\n').filter((line) => line.trim() !== '').slice(1);

    const fields = {};

    for (const line of data) {
      const [firstname, , , field] = line.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
    }

    const totalStudents = Object.values(fields)
      .reduce((total, arr) => total + arr.length, 0);

    console.log(`Number of students: ${totalStudents}`);

    for (const field of Object.keys(fields)) {
      console.log(
        `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
