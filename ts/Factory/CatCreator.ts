class CatCreator extends AbstractAnimalCreator {
    public override factoryMethod(): IAnimal {
        return new Cat();
    }
}
