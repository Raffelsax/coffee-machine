
let CoffeeMachine = require('../index.js');



let myMachine;
let resultOfStartButton;

module.exports = function () {

  this.Given(/^that the machine is plugged in$/, function () {


    myMachine = new CoffeeMachine();


    myMachine.plugIn();

    assert.strictEqual(
      myMachine.pluggedIn,
      true,
      'Expected the property pluggedIn to be true after calling the plugIn() method.'
    );
  });

  this.Given(/^that water is available$/, function () {

    myMachine.connectToWater();

    assert.strictEqual(
      myMachine.connectedToWater,
      true,
      'Expected the property connectedToWater to be true after calling the connectToWater() method.'
    );
  });

  this.Given(/^that the machine has enough ground coffee$/, function () {

    assert.deepEqual(
      myMachine.checkIfEnoughCoffeeForACup(),
      false,
      'Expected a new machine to not have enough coffee'
    );

    myMachine.fillWithCoffee(100);

    assert.deepEqual(
      myMachine.checkIfEnoughCoffeeForACup(),
      true,
      'Expected to have enough coffee for a cup (after filling it with 100 grams of ground coffee)'
    );
  });

  this.Given(/^that the machine has enough chocolate powder$/, function () {
    assert.deepEqual(
      myMachine.checkIfEnoughChocolatePowderForACup(),
      false,
      'Expected a new machine to have no chocolate powder');

    myMachine.fillWithChocolatePowder(100);

    assert.deepEqual(
      myMachine.checkIfEnoughChocolatePowderForACup(),
      true,
      'Expected a new machine to have no chocolate powder');
  });

  this.Given(/^that the machine has enough powdered milk$/, function () {
    assert.deepEqual(
      myMachine.checkIfEnoughMilkPowder(),
      false,
      'Expected a new machine to have no chocolate powder');

    myMachine.fillWithMilkPowder(100);

    assert.deepEqual(
      myMachine.checkIfEnoughMilkPowder(),
      true,
      'Expected a new machine to have no chocolate powder');
  });




  this.Given(/^the machine has plastic cups$/, function () {

    assert.deepEqual(
      myMachine.checkIfAnyCupsLeft(),
      false,
      'Expected a new machine to not have enough cups'
    );

    myMachine.fillWithCups(2);

    assert.deepEqual(
      myMachine.checkIfAnyCupsLeft(),
      true,
      'Expected the machine to have at least one cup after filling with two cups'
    );
  });

  this.When(/^the user inserts a (\d+) kr coin$/, function (amountOfMoney) {


    amountOfMoney /= 1;

    let moneyBefore = myMachine.insertedMoney;
    myMachine.insertMoney(amountOfMoney);
    assert.deepEqual(
      myMachine.insertedMoney,
      moneyBefore + amountOfMoney,
      "Expected the amount of money inserted to increase with the amount inserted"
    )
  });


  this.When(/^the user inserts a "([^"]*)" kr coin$/, function (nonMoney) {


    global.nonMoney = nonMoney

    assert.throws(

      function () {
        myMachine.insertMoney(global.nonMoney);
      },

      Error,

      'You must insert money not ' + nonMoney,

      'Expected the runtime error "You must insert money not ' + nonMoney + '"'
    );
  });

  this.When(/^the user presses the button for a cup of black coffee$/, function () {
    // Write code here that turns the phrase above into concrete actions

  });

  this.When(/^the user presses the button for a cup of hot chocolate$/, function () {
    // Write code here that turns the phrase above into concrete actions

  });

  this.When(/^presses the "([^"]*)" button$/, function (buttonName) {

    if (buttonName === 'start') {

      resultOfStartButton = myMachine.pressStartButton();
    }
    else {
      assert(false, "The only button on this machine should be the start button")
    }
  });


  this.Then(/^the user recieves (\d+) cup of coffee\.$/, function (cups) {
    cups /= 1;

    if (cups === 1) {
      assert.deepEqual(
        resultOfStartButton,
        "here's your coffee",
        "Didn't get any coffee? You should. We inserted enough."
      );
    }
    else {
      assert.notDeepEqual(
        resultOfStartButton,
        "here's your coffee",
        "Did you get coffee? You shouldn't. We didn't insert enough money!"
      );
    }

  });

  this.Then(/^the user recieves (\d+) cup of hot chocolate\.$/, function (cups) {

    cups /= 1;

    if (cups === 1) {
      assert.deepEqual(
        resultOfStartButton,
        "here's your chocolate",
        "Didn't get any coffee? You should. We inserted enough."
      );
    }
    else {
      assert.notDeepEqual(
        resultOfStartButton,
        "here's your coffee",
        "Did you get coffee? You shouldn't. We didn't insert enough money!"
      );
    }
  });

  this.Then(/^the user recieves (\d+) cup of coffee with milk\.$/, function (cups) {

    cups /= 1;

    if (cups === 1) {
      assert.deepEqual(
        resultOfStartButton,
        "here's your coffee with milk",
        "Didn't get any coffee? You should. We inserted enough."
      );
    }
    else {
      assert.notDeepEqual(
        resultOfStartButton,
        "here's your coffee",
        "Did you get coffee? You shouldn't. We didn't insert enough money!"
      );
    }
  });

}
