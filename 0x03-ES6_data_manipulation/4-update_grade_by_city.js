/**
 * function updateStudentGradeByCity: returns an array of students for a
 *                     specific city with their new grade
 * studentList - A list of objects with students information
 * city - The student's location
 * newGrades - The student's new grade
 */
export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (!Array.isArray(studentList) || !(studentList instanceof Array)) {
    return [];
  }
  if (typeof city !== 'string' || city.length === 0) {
    return [];
  }
  if (!Array.isArray(newGrades) || typeof newGrades[0] !== 'object') {
    return [];
  }

  // Filter students by their location
  const studentsInCity = studentList.filter((student) => student.location === city);

  const updatedStudents = studentsInCity.map((student) => {
    const matchingGrade = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
    student.grade = matchingGrade ? matchingGrade.grade : 'N/A'; /* eslint-disable-line no-param-reassign */
    return student;
  });
  return updatedStudents;
}
