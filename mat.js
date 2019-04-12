//update - just an array of faces




//collection of faces and a collection of bets
    //validate that it's an array of facess, and an array of bets
    //but also that a face on the bet is also a face on the mat
var Face = require("./Face");
//var Bet = require("./Bet"); not required?

//constructs a Mat, which has one property, the face
class Mat {
    constructor(face) {
        this._face = face;
    }
//sets the number of faces on the mat to six;
    static defaultNumberOfFaces() {
        return 6;
    }

    set face(matFaces) {
        if (Array.isArray(matFaces)) {//if it's not an array, throw an error.
            for (var i = 0; i < matFaces.length; i++) {
                if (!(matFaces[i] instanceof Face)) { //validates that evey member is the type that I need
                    matFaces[i] = new Face(i, i, i); //you're passing values for the image parameter this time
                }
            }// let IsValid = faces.map((f) => (if instanceof Face)? 0 : 1);
            // let errors = isValid.filter((f) => == 1);
            //if(erros.length > )
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