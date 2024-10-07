export default class Combat {
    _combatPoints;

    constructor(
        combatPoints
    ) {
        this._combatPoints = combatPoints;
    }

    combatPointsUp(quantity) {
        this._combatPoints =+ quantity;
    }

    combatPointsDown(quantity) {
        this._combatPoints -= quantity;
    }
}