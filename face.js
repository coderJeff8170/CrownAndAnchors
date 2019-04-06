class Face {
    constructor(faceName, faceValue, faceImage) {
        this._faceName = faceName;
        this._faceValue = faceValue;
        this._faceImage = faceImage;
    }

    set faceName(newFaceName) {
        this._faceName = faceName | "unknown"; //make sure property has a value if it is not defined.
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

