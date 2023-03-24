abstract class AbstractAnimalCreator {
    public abstract factoryMethod(): IAnimal;

    public returnAnimal(animalName: string, animalAge: number): IAnimal {
        const animal = this.factoryMethod();

        animal.setAnimalData(animalName, animalAge);

        return animal;
    }
}
