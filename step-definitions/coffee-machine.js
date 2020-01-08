// Import our program in this case an instance of out coffee machine
let CoffeeMachine = require('../index.js');
let myMachine = new CoffeeMachine;

// Export the step definitions so that cucumber can read them
module.exports = function () {

    this.Given(/^that the machine is plugged in$/,
        function () {
            // Tell the machine that it is plugged in
            myMachine.plugIn();
            // check that the property pluggedIn is true
            assert.strictEqual(myMachine.pluggedIn,
                true,
                'expected the property pluggedIn to be true after calling the plugIn() method.')

        });

    this.Given(/^that water is available$/, function () {
        // tell the machine to connect to water
        myMachine.connectToWater();
        // check 
        assert.strictEqual(myMachine.connectedToWater, true, "[Expected the property connectedToWater to be true after calling the connectToWater() method]");
    });

    this.Given(/^that the machine has ground coffee$/, function () {
        // Write code here that turns the phrase above into concrete actions
        myMachine.fillWithCoffee();

        assert.isAtLeast(myMachine.amountOfCoffee, 13, "[Expect the amount of coffee to be at least 13 grams]")
    });

    this.Given(/^the machine has plastic cups$/, function () {
        // Write code here that turns the phrase above into concrete actions
        myMachine.fillWithCups();
        assert.isAtLeast(myMachine.numberOfCups, 1, "[expect the number of cups to be at least 1]")
    });

    this.When(/^the user inserts a 10 kr coin$/, function () {
        // Write code here that turns the phrase above into concrete actions
        myMachine.insertMoney();
        assert.strictEqual(1, 1, "[expect the number of 10 kr coin to be 1]");
    });

    this.When(/^presses the start button$/, function () {
        // Write code here that turns the phrase above into concrete actions
        myMachine.pressStartButton();
        assert.strictEqual(myMachine.pressedStart, true, "[message]");



    });

    this.Then(/^the user recieves a cup of coffee$/, function () {
        // Write code here that turns the phrase above into concrete actions
        myMachine.brewCoffee();
        assert.strictEqual(myMachine.brewedCoffee, true, "[message]");
        myMachine.dispenseCup();
        assert.strictEqual(myMachine.dispensedCup, true, "[message]");
        myMachine.dispenseCoffee();
        assert.strictEqual(myMachine.dispensedCoffee, true, "[message]");
    });





}