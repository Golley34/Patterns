"use strict";
class Alligator extends AbstractAnimal {
    constructor() {
        super();
        this._animalType = "Аллигатор";
    }
    getType() {
        return this._animalType;
    }
    talk() {
        alert("*Аллигаторные звуки*");
    }
}
//# sourceMappingURL=Alligator.js.map