//bet is just a face and a bet value - import face
//validate that you have a face and a numeric value greater than zero


let Face = require("./Face");//must assign imported function to a variable

class Bet {
    constructor(face, betValue) {//if you don't get a face first, there can be no bet
        this._face = face;
        this._betValue = betValue;
    }


    set face(face) {
        if (!(face instanceof Face)) {
            for (var i = 0; i < betFace.length; i++) {
                if (!(betFace[i] instanceof Face)) {
                    betFace[i] = new Face(i, i, i); 
                }
            }
        }
    
        else {
        var betFace = [];

            for (var i = 0; i < Die.defaultNumberOfFaces(); i++) {
                betFace.push(new Face(i, i + 1));
            }
        }

        
    this._face = betFace;
    }

    
    get face() {
        return this._face;
    }

    set betValue(betValue) {
        if(isNaN(betValue) || betValue <= 0) {
            throw new Error("Invalid value for property betValue");
        }
        else {
            this._betValue = betValue;
        }

    }

    get betValue() {
        return this._betValue;
    }
/*     set betValue(betValue) {
        if(isNaN(betValue) || betValue < 1) {
            this._bet = 10;
        }
        else {
            this._betValue = betValue;
        }

    }
    
    get bet() {
        return this._bet;
    }
 */
}
/* var jeffsBet = new Bet('apple', 'crown');
console.log(jeffsBet); */ //wrong place to do this! Do in app!
module.exports = Bet;