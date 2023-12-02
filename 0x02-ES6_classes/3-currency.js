export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(newCode) {
    if ((typeof newCode !== 'string') && !(newCode instanceof String)) {
      throw new Error('Code must be a string');
    }
    this._code = newCode;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if ((typeof newName !== 'string') && !(newName instanceof String)) {
      throw new Error('Name must be a string');
    }
    this._code = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
