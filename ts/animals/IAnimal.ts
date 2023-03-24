interface IAnimal {
    setStrategy: (strategy: IStrategy) => void 
    setAnimalData: (animalName: string, animalAge: number) => void
    getAnimalName: () => string
    getAnimalAge: () => number 
    isDead: () => boolean 
    feedAnimal: () => void 
    playAnimal: () => void 
    treatAnimal: () => void
    talk: () => void
    getType: () => string
    getSatietyLevel: () => number 
    getMoodLevel: () => number 
    getHealthLevel: () => number 
}