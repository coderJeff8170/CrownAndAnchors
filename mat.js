//collection of faces and a collection of bets
    //validate that it's an array of facess, and an array of bets
    //but also that a face on the bet is also a face on the mat
var Face = require("./Face");
var Bet = require("./Bet");

//constructs a Mat, which has two properties: a collection of bets, and a collection of faces;
class Mat {
    constructor(bets, faces) {
        this._bets = bets;
        this._faces = faces;
    }
//sets the number of faces on the mat to six;
    static defaultNumberOfFaces() {
        return 6;
    }
//sets bets with a parameter of matBets; Checks that matBets is an array of bets
    set bets(matBets) {
        if (Array.isArray(matBets)) {//if it is an array,
            for (var i = 0; i < matBets.length; i++) {//we'll iterate through the array and check to see,
                if (!(matBets[i] instanceof Bet)) { //if each matBets index is an instance of each Bet class index,
                    matBets[i] = new Bet(i, i); //each matBet index will be assigned a value and a face from the input;
                }
            }
        }
    
        else {
        var matBets = [];//if matBets isn't an array, it'll create one...

            }
       /*  if(isNaN(betValue)) {
            this._betValue = 0;
        }
        else {
        this._betValue = betValue;
        } */
    this._bets = matBets;
    }

    
    
    get bets() {
        return this._bets;
    }
        
    set faces(matFaces) {
        if (Array.isArray(matFaces)) {
            for (var i = 0; i < matFaces.length; i++) {
                if (!(matFaces[i] instanceof Face)) { //validates that evey member is the type that I need
                    matFaces[i] = new Face(i, i, i); //you're passing values for the image parameter this time
                }
            }
        }
    
        else {
        var matFaces = [];//if matFaces ain't an array, it'll create one and fill it with six faces with two params

            for (var i = 0; i < Mat.defaultNumberOfFaces(); i++) {
                matFaces.push(new Face(i, i + 1, i));
            }

        }

    this._faces = matFaces;
    }
    
    get faces() {
        return this._faces;
    }
}

module.exports = Mat;