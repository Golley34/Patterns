abstract class AbstractAnimal implements IAnimal {
    protected _animalName!: string;
    protected _animalAge!: number;
    protected _satietyLevel: number;
    protected _moodLevel: number;
    protected _healthLevel: number;
    protected _strategy!: IStrategy;
    protected _alive: boolean;
    
    constructor() {
        this._satietyLevel = 0;
        this._moodLevel = 0;
        this._healthLevel = 0;
        this._alive = true;
    }

    public setAnimalData(animalName: string, animalAge: number): void {
        this._animalName = animalName;
        this._animalAge = animalAge;
    }
    public getAnimalName() : string {
        return this._animalName
    }
    public getAnimalAge() : number {
        return this._animalAge
    }
    public getSatietyLevel() : number {
        return this._satietyLevel
    }
    public getMoodLevel() : number {
        return this._moodLevel
    }
    public getHealthLevel() : number {
        return this._healthLevel
    }
    public setStrategy(strategy: IStrategy): void {
        this._strategy = strategy;
    }

    public isDead(): boolean {
        if(this._satietyLevel <= -30 || this._moodLevel <= -30 || this._healthLevel <= -30) {
            this._alive = false;
        }
        return this._alive;
    }

    public feedAnimal(): void {
        let status = this._strategy.feedAnimal(this._satietyLevel, this._moodLevel, this._healthLevel);
        this._satietyLevel = status[0]
        this._moodLevel = status[1]
        this._healthLevel = status[2]
    }
    public playAnimal(): void {
        let status = this._strategy.playAnimal(this._satietyLevel, this._moodLevel, this._healthLevel);
        this._satietyLevel = status[0]
        this._moodLevel = status[1]
        this._healthLevel = status[2]
    }
    public treatAnimal(): void {
        let status = this._strategy.treatAnimal(this._satietyLevel, this._moodLevel, this._healthLevel);
        this._satietyLevel = status[0]
        this._moodLevel = status[1]
        this._healthLevel = status[2]
    }

    public abstract talk(): void  
    public abstract getType() : string 
}