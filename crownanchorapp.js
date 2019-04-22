//import Person from './Person' ES6

var Face = require('./Face.js'); //variable doesn't need to match class
var Die = require('./Die.js');
var Mat = require('./Mat.js');
var Bet = require('./Bet.js');

try {
var myFace = new Face('Crown', 10, 'imageurl');// you gotta use the new keyword mangggg!!!
//image url is validated as a string
//if the var is greyed out, that means it's not being used (variable defined but never read)

var myBet = new Bet(20, 'Spade');
//you have to populate this from the DOM 
var myBetAgain = new Bet('Crown', 10);

console.log(`I'm betting ${myBet.betValue}`);
console.log(myBetAgain);

}
catch(err) {
    console.log(err.message);
}
