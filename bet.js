//bet is just a face and a bet value - import face
//validate that you have a face and a numeric value
var Face = require("./Face");

class Bet {
    constructor(bet, face) {
        this._bet = bet;
        this._face = face;
    }

    set bet(newBet) {
        if(isNaN(newBet)) {
            this._bet = 0;
        }
        else {
            this._bet = newBet;
        }

    }
    
    get bet() {
        return this._bet;
    }

    set face(newFace) {
        this._face = newFace;
    }
    
    get face() {
        return this._face;
    }
}
var jeffsBet = new Bet('apple', 'crown');
console.log(jeffsBet);
module.exports = Bet;