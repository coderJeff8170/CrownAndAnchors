//import the class modules
var Face = require('./Face.js'); //variable doesn't need to match class
var Die = require('./Die.js');
var Mat = require('./Mat.js');
var Bet = require('./Bet.js');


//a letant for each face
class CrownAndAnchorsGame {
    constructor(){
        let crownFace = new Face('crown', 1, 'crown.jpg');
        let anchorFace = new Face('anchor', 2, 'anchor.jpg');
        let heartFace = new Face('heart', 3, 'heart.jpg');
        let spadeFace = new Face('spade', 4, 'spade.jpg');
        let diamondFace = new Face('diamond', 5, 'diamond.jpg');
        let clubFace = new Face('club', 6, 'club.jpg');

        let faces = [];

        faces.push(crownFace);
        faces.push(anchorFace);
        faces.push(heartFace);
        faces.push(spadeFace);
        faces.push(diamondFace);
        faces.push(clubFace);

        this._mat = new Mat(faces);

        let crownBet = new Bet(crownFace, 0);
        let anchorBet = new Bet(anchorFace, 0);
        let heartBet = new Bet(heartFace, 0);
        let spadeBet = new Bet(spadeFace, 0);
        let diamondBet = new Bet(diamondFace, 0);
        let clubBet = new Bet(clubFace, 0);

        let bets = [];

        bets.push(crownBet);
        bets.push(anchorBet);
        bets.push(heartBet);
        bets.push(spadeBet);
        bets.push(diamondBet);
        bets.push(clubBet);

        this._bets = bets;

        let dice = [];

        dice.push(new Die(faces));
        dice.push(new Die(faces));
        dice.push(new Die(faces));

        this._gameState = 0;
    }

    get gameState() {
        return this._gameState;
    }

    placeBet(crownBetValue, anchorBetValue) {
        this._gameState = 1;
    }
}