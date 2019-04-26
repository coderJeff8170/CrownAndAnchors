//import the class modules
var Face = require('./Face.js'); //variable doesn't need to match class
var Die = require('./Die.js');
var Mat = require('./Mat.js');
var Bet = require('./Bet.js');

<<<<<<< HEAD
=======
try {
var myFace = new Face('Crown', 10, 'imageurl');// you gotta use the new keyword mangggg!!!
//image url is validated as a string
//if the var is greyed out, that means it's not being used (variable defined but never read)

var myBet = new Bet(20, 'Spade');
//you have to populate this from the DOM 
var myBetAgain = new Bet('Crown', 10);
>>>>>>> 999ecfa4deb48511a4db0c54ac53e64e21e3a95f

//a constant for each face
const crown = new Face('crown', 1, 'crown.jpg');
const anchor = new Face('anchor', 2, 'anchor.jpg');
const heart = new Face('heart', 3, 'heart.jpg');
const spade = new Face('spade', 4, 'spade.jpg');
const diamond = new Face('diamond', 5, 'diamond.jpg');
const club = new Face('club', 6, 'club.jpg');

//make an array of faces
let faces = [];

//assign array of faces to myDie
let myDie = [crown, anchor, heart, spade, diamond, club];

//a constant for each die - i feel like this could be iterated
/* let die = [];
for(i=0; i<3; i++) {
    die[i] = new Die(myDie);
    console.log(die[i]);
} */
let die1 = new Die(myDie);
let die2 = new Die(myDie);
let die3 = new Die(myDie);
//set up the mat
let myMat = new Mat(myFaces);
console.log(myMat.face.name);
//place a bet
let myBet = new Bet(spade, 10);
console.log(`I'm betting ${myBet.betValue}`);
<<<<<<< HEAD
//roll 3 die


//restart game





=======
console.log(myBetAgain);

}
catch(err) {
    console.log(err.message);
}
>>>>>>> 999ecfa4deb48511a4db0c54ac53e64e21e3a95f
