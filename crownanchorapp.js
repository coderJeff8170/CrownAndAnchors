//import the class modules
var Face = require('./Face.js'); //variable doesn't need to match class
var Die = require('./Die.js');
var Mat = require('./Mat.js');
var Bet = require('./Bet.js');


//a variable for each face, fulfilling all three parameters defined in the Face imported class  
class CrownAndAnchorsGame {
    constructor(){
        let crownFace = new Face('crown', 1, 'crown.jpg');
        let anchorFace = new Face('anchor', 2, 'anchor.jpg');
        let heartFace = new Face('heart', 3, 'heart.jpg');
        let spadeFace = new Face('spade', 4, 'spade.jpg');
        let diamondFace = new Face('diamond', 5, 'diamond.jpg');
        let clubFace = new Face('club', 6, 'club.jpg');
        // an array to hold the faces
        let faces = [];
        // fill the array with each namedFace
        faces.push(crownFace);
        faces.push(anchorFace);
        faces.push(heartFace);
        faces.push(spadeFace);
        faces.push(diamondFace);
        faces.push(clubFace);
        //the mat for this instance of the game will be filled with the array of faces,
        //and that array will be validated in the class.
        this._mat = new Mat(faces);
        //a variable for each of the six bets on the mat;
        //each bet consists of a face and a value initally set to 0.
        let crownBet = new Bet(crownFace, 0);
        let anchorBet = new Bet(anchorFace, 0);
        let heartBet = new Bet(heartFace, 0);
        let spadeBet = new Bet(spadeFace, 0);
        let diamondBet = new Bet(diamondFace, 0);
        let clubBet = new Bet(clubFace, 0);
        //an array to hold the bets
        let bets = [];
        //fill the array with the bets
        bets.push(crownBet);
        bets.push(anchorBet);
        bets.push(heartBet);
        bets.push(spadeBet);
        bets.push(diamondBet);
        bets.push(clubBet);
        //the bets for this particular instance of the game will be filled with the array of bets
        this._bets = bets;
        //an array to hold the values of the three dice when rolled.
        let dice = [];
        //adding the three dice to the array,
        //each one having a rollDice() method available to it that will return a value from 1 to 6.
        dice.push(new Die(faces));
        dice.push(new Die(faces));
        dice.push(new Die(faces));
        //gameState set to 0.
        this._gameState = 0;
    }

    get gameState() {
        return this._gameState;
    }
//bet method?

//place a bet
//class homework - create a bet Method
//which will: 
//validate game state
//validate bet values
//if bet value > 0, pass new value to that face.

    placeBet(crownBetValue, anchorBetValue) {
        this._gameState = 1;
    }

    set betValues(betValues, gameState) {
        if(!gameState === 1) {
            throw new Error("Wrong game state!");
        }
        else if(betValues ) {
            
        }
        
    }

    get betValues() {
        return this._betValues;
    }
}