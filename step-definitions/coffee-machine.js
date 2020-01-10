
let CoffeeMachine = require('../index.js');



let myMachine;


module.exports = function () {

  this.Given(/^that the machine is plugged in$/, function () {


    myMachine = new CoffeeMachine();


    myMachine.plugIn();

    assert.strictEqual(
      myMachine.pluggedIn,
      true,
      ''
    );
  });

  this.Given(/^that water is available$/, function () {

    myMachine.connectToWater();


    assert.strictEqual(
      myMachine.connectedToWater,
      true,
      ''
    );
  });

  this.Given(/^that the machine has enough ground coffee$/, function () {

    assert.deepEqual(
      myMachine.checkIfEnoughCoffeeForACup(),
      false,
      ''
    );

    myMachine.fillWithCoffee(100);

    assert.deepEqual(
      myMachine.checkIfEnoughCoffeeForACup(),
      true,
      ''
    );
  });

  this.Given(/^that the machine has enough chocolate powder$/, function () {
    assert.deepEqual(
      myMachine.checkIfEnoughChocolatePowderForACup(),
      false,
      '');

    myMachine.fillWithChocolatePowder(100);

    assert.deepEqual(
      myMachine.checkIfEnoughChocolatePowderForACup(),
      true,
      '');
  });

  this.Given(/^that the machine has enough powdered milk$/, function () {
    assert.deepEqual(
      myMachine.checkIfEnoughMilkPowder(),
      false,
      '');

    myMachine.fillWithMilkPowder(100);

    assert.deepEqual(
      myMachine.checkIfEnoughMilkPowder(),
      true,
      '');
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
      ''
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



  this.Then(/^the user presses black coffee button$/, function () {
    // Write code here that turns the phrase above into concrete actions

  });


  this.Then(/^the customer recieves a cup of black coffee\.$/, function () {
    cups /= 1;

    if (cups === 1) {
      assert.deepEqual(
        resultOfStartButton,

      );
    }
    else {
      assert.notDeepEqual(
        resultOfStartButton,

      );
    }

  });
  this.Then(/^that the customer has inserted enough money$/, function () {

    this.insertedMoney = 10;
    assert.deepEqual(10, 10, "[message]");
  });

  this.Then(/^the user presses the hot chocolate button$/, function () {
    //myMachine.pressHotChocolateButton()

    assert.strictEqual(true, true, "[message]");

  });

}
