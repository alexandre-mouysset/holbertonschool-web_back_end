const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');

    const lines = data
      .split('\n')
      .filter((line) => line.trim() !== '')
      .slice(1);

    const fields = {};

    for (const line of lines) {
      const [firstname, , , field] = line.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
    }

    const totalStudents = Object.values(fields)
      .reduce((sum, arr) => sum + arr.length, 0);

    console.log(`Number of students: ${totalStudents}`);

    for (const field of Object.keys(fields)) {
      console.log(
        `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
      );
    }

    return Promise.resolve();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
