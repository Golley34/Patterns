"use strict";
class Dog extends AbstractAnimal {
    constructor() {
        super();
        this._animalType = "Собака";
    }
    getType() {
        return this._animalType;
    }
    talk() {
        alert("Вафф-вафф");
    }
}
//# sourceMappingURL=Dog.js.map