export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      const propertyList = Object.getOwnPropertyNames(this.constructor.prototype);
      if (!propertyList.includes('evacuationWarningMessage')) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft;
  }

  // Getter and Setter for sqft
  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if ((typeof newSqft !== 'number') && !(newSqft instanceof Number)) {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = newSqft;
  }
}
