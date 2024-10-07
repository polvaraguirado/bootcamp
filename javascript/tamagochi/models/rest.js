export default class Rest {
    _restPoints;

    constructor(
        restPoints
    ) {
        this._restPoints = restPoints;
    }

    restPointsUp(quantity) {
        this._restPoints =+ quantity;
    }

    restPointsDown(quantity) {
        this._restPoints -= quantity;
    }
}