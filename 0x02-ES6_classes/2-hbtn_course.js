export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if ((typeof newName !== 'string') && !(newName instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(newLength) {
    if ((typeof newLengthlength !== 'number') && !(newLength instanceof Number)) {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Setter for students
  set students(newStudents) {
    if (!(newStudents instanceof Array) || !newStudents.every((std) => typeof std === 'string')) {
      throw new TypeError('Students must be an array');
    }
    this._students = newStudents;
  }
}
