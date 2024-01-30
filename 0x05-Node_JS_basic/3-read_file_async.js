const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.trim().split('\n');
        const header = lines.shift().split(',');

        if (!header.includes('firstname') || !header.includes('field')) {
          reject(new Error('Invalid database format'));
          return;
        }

        const studentsByField = {};

        lines.forEach((line) => {
          const [firstname, field] = line.split(',');

          if (firstname && field) {
            if (studentsByField[field]) {
              studentsByField[field].push(firstname);
            } else {
              studentsByField[field] = [firstname];
            }
          }
        });

        const numberOfStudents = lines.length;
        console.log(`Number of students: ${numberOfStudents}`);

        Object.keys(studentsByField).forEach((field) => {
          const numberOfStudentsInField = studentsByField[field].length;
          const listOfFirstnames = studentsByField[field].join(', ');
          console.log(`Number of students in ${field}: ${numberOfStudentsInField}. List: ${listOfFirstnames}`);
        });

        resolve(numberOfStudents);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}
