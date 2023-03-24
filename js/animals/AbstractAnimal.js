"use strict";
class AbstractAnimal {
    constructor() {
        this._satietyLevel = 0;
        this._moodLevel = 0;
        this._healthLevel = 0;
        this._alive = true;
    }
    setAnimalData(animalName, animalAge) {
        this._animalName = animalName;
        this._animalAge = animalAge;
    }
    getAnimalName() {
        return this._animalName;
    }
    getAnimalAge() {
        return this._animalAge;
    }
    getSatietyLevel() {
        return this._satietyLevel;
    }
    getMoodLevel() {
        return this._moodLevel;
    }
    getHealthLevel() {
        return this._healthLevel;
    }
    setStrategy(strategy) {
        this._strategy = strategy;
    }
    isDead() {
        if (this._satietyLevel <= -30 || this._moodLevel <= -30 || this._healthLevel <= -30) {
            this._alive = false;
        }
        return this._alive;
    }
    feedAnimal() {
        let status = this._strategy.feedAnimal(this._satietyLevel, this._moodLevel, this._healthLevel);
        this._satietyLevel = status[0];
        this._moodLevel = status[1];
        this._healthLevel = status[2];
    }
    playAnimal() {
        let status = this._strategy.playAnimal(this._satietyLevel, this._moodLevel, this._healthLevel);
        this._satietyLevel = status[0];
        this._moodLevel = status[1];
        this._healthLevel = status[2];
    }
    treatAnimal() {
        let status = this._strategy.treatAnimal(this._satietyLevel, this._moodLevel, this._healthLevel);
        this._satietyLevel = status[0];
        this._moodLevel = status[1];
        this._healthLevel = status[2];
    }
}
//# sourceMappingURL=AbstractAnimal.js.map