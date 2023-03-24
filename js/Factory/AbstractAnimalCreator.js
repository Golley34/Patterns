"use strict";
class AbstractAnimalCreator {
    returnAnimal(animalName, animalAge) {
        const animal = this.factoryMethod();
        animal.setAnimalData(animalName, animalAge);
        return animal;
    }
}
//# sourceMappingURL=AbstractAnimalCreator.js.map