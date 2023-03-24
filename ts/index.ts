let animals: IAnimal[] = [];

const userCode = (creator: AbstractAnimalCreator): void => {
    while (true) {
        const userNameAnimal: string | null = prompt("Введите имя животного")
        if (userNameAnimal === null || userNameAnimal.trim() === "") {
            break;
        }
        const userAgeAnimal: string | null = prompt("Введите возраст животного")
        if (userAgeAnimal === null) {
            break;
        }
        const userAgeAnimalNumber = parseInt(userAgeAnimal)
        if (isNaN(userAgeAnimalNumber) === true) {
            alert("Операция отменяется! Нужно в возрасте вести число!")
            break
        }
        if (userAgeAnimalNumber < 0) {
            alert("Операция отменяется! Возраст не может быть отрицательным!")
            break
        }
        const animal: IAnimal = creator.returnAnimal(userNameAnimal, userAgeAnimalNumber);
        animals.push(animal);
        break;
    }
}

const choiseStrategy = (select: string): void => {
    if (animals[parseInt(select) - 1].getAnimalAge() >= 0 && animals[parseInt(select) - 1].getAnimalAge() <= 5){
        animals[parseInt(select) - 1].setStrategy(new YoungAgedStrategy)
    } else if (animals[parseInt(select) - 1].getAnimalAge() >= 6 && animals[parseInt(select) - 1].getAnimalAge() <= 10){
        animals[parseInt(select) - 1].setStrategy(new MiddleAgedStrategy)
    } else {
        animals[parseInt(select) - 1].setStrategy(new OldAgedStrategy)
    }
}

const actionCode = (select: string): void => {
    while(true){
        let animalStatus: string = `Статус:\nВид: '${animals[parseInt(select) - 1].getType()}' | Кличка: '${animals[parseInt(select) - 1].getAnimalName()}' | Возраст: ${animals[parseInt(select) - 1].getAnimalAge()} \nУровень сытости: ${animals[parseInt(select) - 1].getSatietyLevel()} | Уровень настроения: ${animals[parseInt(select) - 1].getMoodLevel()} | Уровень здоровья: ${animals[parseInt(select) - 1].getHealthLevel()}\n\nВыберете действие:\n1)Введите цифру '1' если хотите покормить животное.\n2)Введите цифру '2' если хотите поиграть с животным.\n3)Введите цифру '3' если хотите полечить животное.\n4)Введите цифру '4' если хотите поговорить с животным.`

        choiseStrategy(select)

        let selectAction: string | null = prompt(animalStatus)
        if (selectAction === null){
            break;
        } else if (parseInt(selectAction) === 1){
            animals[parseInt(select) - 1].feedAnimal()
        } else if (parseInt(selectAction) === 2){
            animals[parseInt(select) - 1].playAnimal()
        } else if (parseInt(selectAction) === 3){
            animals[parseInt(select) - 1].treatAnimal()
        } else if (parseInt(selectAction) === 4){
            animals[parseInt(select) - 1].talk()
        } else {
            alert("Ошибка ввода.")
        }

        let isAlive =  animals[parseInt(select) - 1].isDead()
        if (isAlive === false) {
            animals.splice(parseInt(select) - 1, 1)
            alert("К сожалению животное умерло.")
            break;
        }
    }
}

let start = confirm("Запустить игру?")
if (start === true) {
    while(true) {
        let action: string | null = prompt("Выберете действие:\n1)Введите цифру '1' если хотите создать новое животное.\n2)Введите цифру '2' если хотите выбрать существующее.")
        if (action === null){
            break;
        } else if (parseInt(action) === 1){
            let selectAnimalCreator: string | null = prompt("1)Введите цифру '1' если хотите создать кошку.\n2)Введите цифру '2' если хотите создать собаку.\n3)Введите цифру '3' если хотите создать аллигатора.")
            if (selectAnimalCreator === null){
                break;
            } else if (parseInt(selectAnimalCreator) === 1){
                userCode(new CatCreator)
            } else if (parseInt(selectAnimalCreator) === 2){
                userCode(new DogCreator)
            } else if (parseInt(selectAnimalCreator) === 3){
                userCode(new AlligatorCreator)
            } else {
                alert("Ошибка ввода.")
            }
        } else if (parseInt(action) === 2){
            if (animals.length === 0){
                alert("К сожалению список пуст, попробуйте создать новое животное.")
            } else {
                let selectAnimal: string = ""
                for(let i = 0; i < animals.length; i++) {
                    selectAnimal += `${i+1}) Введите цифру '${i+1}' если хотите выбрать животное с кличкой '${animals[i].getAnimalName()}', возраст ${animals[i].getAnimalAge()} (${animals[i].getType()})\n`
                }
                let select: string | null = prompt(selectAnimal)
                if (select === null){
                    break;
                } else if (parseInt(select) > 0 && parseInt(select) <= animals.length){
                    actionCode(select)
                } else {
                    alert("Ошибка ввода.")
                }
            }
        } else {
            alert("Ошибка ввода.")
        }
    }
} 
