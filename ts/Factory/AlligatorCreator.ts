class AlligatorCreator extends AbstractAnimalCreator {
    public override factoryMethod(): IAnimal {
        return new Alligator();
    }
}