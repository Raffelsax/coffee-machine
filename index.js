

class CoffeeMachine {

  constructor() {
    this.pluggedIn = false;
    this.connectedToWater = false;
    this.numberOfCups = 0;
    this.insertedMoney = 0;
    this.amountOfCoffee = 0; // in grams
    this.amountOfMilkPowder = 0; // in grams
    this.amountOfChocolatePowder = 0; // in grams
    this.coffeePerCup = 13; // in grams
    this.milkPowderPerCup = 4; // in grams
    this.chocolatePowderPerCup = 10; // in grams
    this.waterPerCup = 2; // decilitres
    this.pricePerCup = 10 // in SEK
  }



  plugIn() {
    this.pluggedIn = true;
  }

  connectToWater() {
    this.connectedToWater = true;
  }

  fillWithCoffee(amount) {
    this.amountOfCoffee += amount;
  }

  fillWithMilkPowder(amount) {

    this.amountOfMilkPowder += amount;
  }

  fillWithChocolatePowder(amount) {

    this.amountOfChocolatePowder += amount;

  }

  fillWithCups(amount) {

    this.numberOfCups += amount;
  }

  // interaction

  insertMoney(inserted) {

    if (typeof inserted !== 'number') {
      throw (new Error('You must insert money not ' + nonMoney));
    }
    this.insertedMoney += inserted;
  }

  pressBlackCoffeeButton() {
    if (this.insertedMoneySinceLastCup === this.pricePerCup) {
      this.brewCoffee();
      this.totalMoneyInMachine += this.insertedMoneySinceLastCup;
      this.insertedMoneySinceLastCup = 0;
      return "here´s your coffee"
    }
  }

  pressCoffeeWithMilkButton() {
    if (this.insertedMoney >= this.pricePerCup) {
      this.totalMoneyInMachine += this.insertedMoneySinceLastCup;
      this.insertedMoneySinceLastCup = 0;
      return "here's your coffee with milk";
    }
  }

  pressHotChocolateButton() {
    if (this.insertedMoney >= this.pricePerCup) {
      this.totalMoneyInMachine += this.insertedMoneySinceLastCup;
      this.insertedMoneySinceLastCup = 0;
      return "here's your chocolate";
    }
  }




  brewCoffee() {

  }

  brewCoffeeWithMilk() {

  }

  brewHotChocolate() {

  }

  dispenseCup() {

  }

  dispenseCoffee() {

  }

  dispenseCoffeeWithMilk() {

  }

  dispenseHotChocolate() {

  }

  checkIfEnoughCoffeeForACup() {
    return this.amountOfCoffee >= this.coffeePerCup;
  }

  checkIfEnoughChocolatePowderForACup() {
    return this.amountOfChocolatePowder >= this.chocolatePowderPerCup;
  }

  checkIfEnoughMilkPowder() {
    return this.amountOfMilkPowder >= this.milkPowderPerCup;
  }

  checkIfAnyCupsLeft() {
    return this.numberOfCups >= 1;
  }

}


module.exports = CoffeeMachine;