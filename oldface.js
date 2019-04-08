class Face {
    constructor(faceName, faceValue, faceImage) {
        this._faceName = faceName;//gives a name like "crown" to each face instance
        this._faceValue = faceValue;//gives a value to each face instance (i.e. the side of the die it's on)
        this._faceImage = faceImage;//assigns an image to each face instance (only required on mat for 2d game)
    }

    // sets new instance of faceName and if it's not defined, sets it to "unknown"
    set faceName(newFaceName) {
        this._faceName = faceName | "unknown"; 
    }
    

    get faceName() {
        return this._faceName;
    }
 
    set faceValue(newFaceValue) {
        if(isNaN(faceValue)) {
            this._faceValue = 0;
        }
        else {
        this._faceValue = faceValue;
        }
    }
    
    get faceValue() {
        return this._faceValue;
    }

    set faceImage(newFaceImage) {
        this._faceImage = faceImage | "./600px-GHS-pictogram-unknown.svg";//check this
    }
    
    get faceImage() {
        return this._faceImage;
    }
}

module.exports = Face;