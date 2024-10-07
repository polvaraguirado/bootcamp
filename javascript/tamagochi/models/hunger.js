export default class Hunger {
    _hungerPoints;
    
    constructor(
        hungerPoints
    ) {
        this._hungerPoints = hungerPoints;
    }

    hungerPointsUp(quantity) {
        this._hungerPoints += quantity;
    }

    hungerPointsDown(quantity) {
        this._hungerPoints -= quantity;
    }
}