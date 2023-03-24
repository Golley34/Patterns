class DogCreator extends AbstractAnimalCreator {
    public override factoryMethod(): IAnimal {
        return new Dog();
    }
}