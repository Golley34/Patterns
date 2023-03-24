interface IStrategy {
    feedAnimal: (satietyLevel: number, moodLevel: number, healthLevel: number) => number[];

    playAnimal: (satietyLevel: number, moodLevel: number, healthLevel: number) => number[];

    treatAnimal: (satietyLevel: number, moodLevel: number, healthLevel: number) => number[];
}