export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const arrayStudentIds = arr.map((obj) => obj.id);
  return arrayStudentIds;
}
