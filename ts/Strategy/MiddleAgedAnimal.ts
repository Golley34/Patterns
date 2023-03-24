class MiddleAgedStrategy implements IStrategy {
    public feedAnimal(satietyLevel: number, moodLevel: number, healthLevel: number): number[] {
        let satiety, mood, health
        if(Math.floor(Math.random() * 10) <= 1) {
            satiety = satietyLevel + 0;
            mood = moodLevel - 30;
            health = healthLevel - 30;
            alert("Животное отравилось.")
        } else {
            satiety = satietyLevel + 5;
            mood = moodLevel + 5;
            health = healthLevel + 5;
        }
        return [satiety, mood, health]
    }
    public playAnimal(satietyLevel: number, moodLevel: number, healthLevel: number): number[] {
        let satiety, mood, health
        if(Math.floor(Math.random() * 10) <= 1) {
            satiety = satietyLevel + 0;
            mood = moodLevel - 30;
            health = healthLevel - 30;
            alert("Животное травмировалось.")
        } else {
            satiety = satietyLevel - 5;
            mood = moodLevel + 5;
            health = healthLevel + 5;
        }
        return [satiety, mood, health]
    }
    public treatAnimal(satietyLevel: number, moodLevel: number, healthLevel: number): number[] {
        let satiety, mood, health
        satiety = satietyLevel + 0;
        mood = moodLevel + 5;
        health = healthLevel + 5;
        return [satiety, mood, health]
    }
}