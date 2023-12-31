export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
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
    if ((typeof newLength !== 'number') && !(newLength instanceof Number)) {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Getter and Setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!(newStudents instanceof Array) || !newStudents.every((std) => typeof std === 'string')) {
      throw new TypeError('Students must be an array');
    }
    this._students = newStudents;
  }
}
