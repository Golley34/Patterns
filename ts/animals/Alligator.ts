class Alligator extends AbstractAnimal {
    private _animalType: string;

    constructor() {
        super()
        this._animalType = "Аллигатор"
    }

    public getType() : string {
        return this._animalType
    }

    public talk(): void {
        alert("*Аллигаторные звуки*")
    }
}