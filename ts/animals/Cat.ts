class Cat extends AbstractAnimal {
    private _animalType: string;

    constructor() {
        super()
        this._animalType = "Кошка"
    }

    public getType() : string {
        return this._animalType
    }

    public talk(): void {
        alert("Муррр-мяу")
    }
}
