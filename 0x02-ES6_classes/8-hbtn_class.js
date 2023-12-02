export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') { throw new TypeError('Size must be a number'); }
    if (typeof location !== 'string') { throw new TypeError('Location must be a string'); }

    this._size = size;
    this._location = location;
  }

  // Defines return value when a HolbertonClass is casted into a Number eg. Number(obj)
  valueOf() {
    return this._size;
  }

  // Defines return value when a HolbertonClass is casted into a String eg. Number(obj)
  toString() {
    return this._location;
  }
}
