"use strict";
class Cat extends AbstractAnimal {
    constructor() {
        super();
        this._animalType = "Кошка";
    }
    getType() {
        return this._animalType;
    }
    talk() {
        alert("Муррр-мяу");
    }
}
//# sourceMappingURL=Cat.js.map