class Mat {//collection of faces and a collection of bets
    //validate that it's an array of bets, and an array of bets
    //but also that a face on the bet is also a face on the mat

    constructor(betValue, matFaces) {
        this._betValue = betValue;
        this._matFaces = matFaces;
    }

    set betValue(newBetValue) {
        this._betValue;
    }
    
    get betValue() {
        return this._betValue;
    }
        
    set matFaces(newMatFaces) {
        this._matFaces;
    }
    
    get matFaces() {
        return this._matFaces;
    }
}

module.exports = Mat;