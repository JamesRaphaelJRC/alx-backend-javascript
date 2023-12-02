export default class Car {
    constructor(brand, motor, color) {
        if (typeof brand != 'string') { throw new TypeError('Brand must be a string') }
        if (typeof motor != 'string') { throw new TypeError('Motor must be a string') }
        if (typeof color != 'string') { throw new TypeError('Color must be a string') }
    }
    
}