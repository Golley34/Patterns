class Dog extends AbstractAnimal {
    private _animalType: string;

    constructor() {
        super()
        this._animalType = "Собака"
    }

    public getType() : string {
        return this._animalType
    }

    public talk(): void {
        alert("Вафф-вафф")
    }
}