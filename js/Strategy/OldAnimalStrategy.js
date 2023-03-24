"use strict";
class OldAgedStrategy {
    feedAnimal(satietyLevel, moodLevel, healthLevel) {
        let satiety, mood, health;
        if (Math.floor(Math.random() * 10) <= 1) {
            satiety = satietyLevel + 0;
            mood = moodLevel - 30;
            health = healthLevel - 30;
            alert("Животное отравилось.");
        }
        else {
            satiety = satietyLevel + 2;
            mood = moodLevel + 2;
            health = healthLevel + 2;
        }
        return [satiety, mood, health];
    }
    playAnimal(satietyLevel, moodLevel, healthLevel) {
        let satiety, mood, health;
        if (Math.floor(Math.random() * 10) <= 1) {
            satiety = satietyLevel + 0;
            mood = moodLevel - 30;
            health = healthLevel - 30;
            alert("Животное травмировалось.");
        }
        else {
            satiety = satietyLevel - 10;
            mood = moodLevel + 2;
            health = healthLevel + 2;
        }
        return [satiety, mood, health];
    }
    treatAnimal(satietyLevel, moodLevel, healthLevel) {
        let satiety, mood, health;
        satiety = satietyLevel + 0;
        mood = moodLevel + 2;
        health = healthLevel + 2;
        return [satiety, mood, health];
    }
}
//# sourceMappingURL=OldAnimalStrategy.js.map