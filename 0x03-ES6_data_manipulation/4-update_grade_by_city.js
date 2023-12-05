import getStudentsByLocation from './2-get_students_by_loc';

/**
 * function updateStudentGradeByCity: returns an array of students for a
 *                     specific city with their new grade
 * studentList - A list of objects with students information
 * city - The student's location
 * newGrades - The student's new grade
 */
export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (!Array.isArray(studentList)) {
    throw new TypeError('student list must be an array');
  }
  if (typeof city !== 'string') {
    throw new TypeError('City must be a string');
  }
  if (!Array.isArray(newGrades)) {
    throw new TypeError('newGrades must be an array');
  }

  // Retrieve the students by their location
  const studentsInCity = getStudentsByLocation(studentList, city);

  const updatedStudents = studentsInCity.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    console.log(matchingGrade);
    student.grade = matchingGrade ? matchingGrade.grade : 'N/A'; /* eslint-disable-line no-param-reassign */
    // for (const newGrade of newGrades) {
    //   if (newGrade.studentId === student.id) {
    //     student.grade = newGrade.grade; /* eslint-disable-line no-param-reassign */
    //   }
    // }
    // if (!('grade' in student)) {
    //   student.grade = 'N/A'; /* eslint-disable-line no-param-reassign */
    // }
    return student;
  });
  return updatedStudents;
}
