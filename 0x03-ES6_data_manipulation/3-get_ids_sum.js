import getListStudentIds from './1-get_list_student_ids';

/**
 * function getStudentIdsSum: Gets the sum of all student ids
 * listOfStudents - A list of objects containing students information
 *                  see '0-getListStudents.js'
 * Return: Sum of all student ids on success
 */
export default function getStudentIdsSum(listofStudents) {
  if (!Array.isArray(listofStudents)) {
    throw new TypeError('List of students must be an array');
  }
  const studentIdList = getListStudentIds(listofStudents);
  const idSum = studentIdList.reduce((id1, id2) => id1 + id2);
  return idSum;
}
