/**
 * listofStudents - an array of objects containing student information
 *                  format - see '0-get_list_students.js'
 * city - The city which is to be filtered with.
 *
 * Return: An array of objects with student location === city or
 *          an empty array of object if listofStudent is not an array.
 * */
export default function getStudentsByLocation(listofStudents, city) {
  if (!Array.isArray(listofStudents)) { return [{}]; }

  const studentsByLocation = listofStudents.filter((student) => student.location === city);
  return studentsByLocation;
}
