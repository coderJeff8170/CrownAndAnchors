var Face = require("./Face");

class Die {
    constructor(faces) {           //constructor function
        this._faces = faces;
    }
    static defaultNumberOfFaces() {
        return 6;
    }
    
    //vv this checs to make sure each face is an array VALIDATE VALIDATE VALIDATE it's a best practice!
    set faces(dieFaces) {
        if (Array.isArray(dieFaces)) {
            for (var i = 0; i < dieFaces.length; i++) {
                if (!(dieFaces[i] instanceof Face)) { //validates that evey member is the type that I need
                    dieFaces[i] = new Face(i, i); //you're only passing values for first two parameters
                }
            }
        }
    
        else {
        var dieFaces = [];//if dieFaces ain't an array, it'll create one and fill it with six faces with two params

            for (var i = 0; i < Die.defaultNumberOfFaces(); i++) {
                dieFaces.push(new Face(i, i + 1));
            }
        }

        
    this._faces = dieFaces;
    this.rollDie();
    }

    get faces() {
        return this._faces;
    }

    rollDie() {

        var upper_bound = this._faces.length - 1;
        var lower_bound = 0;
        var randomFaceIndex =
            Math.floor(Math.random() * (upper_bound - lower_bound));

        this._activeFaceIndex = randomFaceIndex;
    }

    get ActiveFace() {
        return this._faces[this._activeFaceIndex];
    }

    get numberOfFaces() {
        return this._faces.length;
    }
}


module.exports = Die;




/* set face(newFace) {
    this._face = face;
}

get face() {
    return this._face;
}

set roll(newRoll) {
    this._roll = roll;
}

get roll() {
    return this._roll;
}

set faceQuantity(newFaceQuantity) {
    this._faceQuantity = faceQuantity;
}

get faceQuantity() {
    return this._faceQuantity;
}

set activeFace(newActiveFace) {
    this._activeFace = activeFace;
}

get activeFace() {
    return this._activeFace;
}
}
 */

