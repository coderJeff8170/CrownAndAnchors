//collection of faces and a collection of bets
    //validate that it's an array of facess, and an array of bets
    //but also that a face on the bet is also a face on the mat

class Mat {
    constructor(bets, faces) {
        this._bets = bets;
        this._faces = faces;
    }

    static defaultNumberOfFaces() {
        return 6;
    }

    set bets(newBets) {
       /*  if(isNaN(betValue)) {
            this._betValue = 0;
        }
        else {
        this._betValue = betValue;
        } */
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
        var matFaces = [];//if dieFaces ain't an array, it'll create one and fill it with six faces with two params

            for (var i = 0; i < Mat.defaultNumberOfFaces(); i++) {
                matFaces.push(new Face(i, i + 1));
            }
        }

    this._faces = matFaces;
    }
    
    get faces() {
        return this._faces;
    }
}

module.exports = Mat;