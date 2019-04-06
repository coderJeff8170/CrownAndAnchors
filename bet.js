class Bet {//bet is just a face and a bet value - import face validate that you have a face and a numeric value
    constructor(betValue, betFace) {
        this._betValue = betValue;
        this._betFace = betFace;
    }

    set betValue(newBetValue) {
        this._betValue;
    }
    
    get betValue() {
        return this._betValue;
    }

    set betFace(newBetFace) {
        this._betFace;
    }
    
    get betFace() {
        return this._betFace;
    }
}

module.exports = Bet;