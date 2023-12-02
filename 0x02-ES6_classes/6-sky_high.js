import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Calls the constructor of the parent
    super(sqft);

    this.floors = floors;
  }

  // Getter and Setter for floors
  get floors() {
    return this._floors;
  }

  set floors(floors) {
    if ((typeof floors !== 'number') && !(floors instanceof Number)) {
      throw new TypeError('Floor must be a number');
    }
    this._floors = floors;
  }

  // Overriding the method named evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
