//A class that defines how a coffemachine shall work
class CoffeMachine {

    constructor() {
        this.pluggedIn = false;
        this.connectedToWater = false;
        this.amountOfCoffee = 0;
        this.numberOfCups = 0;
        this.insertedMoney = 0;
        this.coffeePerCup = 13;
        this.pressedStart = false;
        this.brewedCoffee = false;
        this.dispensedCup = false;
        this.dispensedCoffee = false;
    }

    plugIn() {

        this.pluggedIn = true;

    }

    connectToWater() {

        this.connectedToWater = true;

    }

    fillWithCoffee(amount) {
        // amount in grams
        amount = 13;
        this.amountOfCoffee = amount;



    }

    fillWithCups(amount) {
        // amount (number of cups)
        amount = 2;
        this.numberOfCups = amount;
    }

    insertMoney(inserted) {

        this.insertedMoney = 1;

    }

    pressStartButton() {

        this.pressedStart = true;

    }

    brewCoffee() {
        this.brewedCoffee = true;

    }

    dispenseCup() {
        this.dispensedCup = true;

    }

    dispenseCoffee() {
        this.dispensedCoffee = true;

    }

}

//create a coffe machine (an instance of the class CoffeeMachine)
let myMachine = new CoffeMachine();

//export the coffee machine to reach it in other files

module.exports = CoffeMachine;