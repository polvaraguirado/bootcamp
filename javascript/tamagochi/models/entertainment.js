export default class Entertainment {
    _entertainmentPoints;

    constructor(
        entertainmentPoints
    ) {
        this._entertainmentPoints = entertainmentPoints;
    }

    entertainmentPointsUp(quantity) {
        this._entertainmentPoints += quantity;
    }

    entertainmentPointsDown(quantity) {
        this._entertainmentPoints -= quantity;
    }
}