Enkel variant av kaffemaskin som kan servera svart kaffe, kaffe med mjölk samt varm choklad. Varje dryck kostar 10 kr. Önskad dryck väljs genom att trycka på en av tre knappar, saknas ingredienser för önskad dryck meddelas detta i displayen innan kunden ombeds betala. Den har ett myntinkast som endast accepterar 10kr-mynt och 5kr-mynt som betalning. Den har även en enkel display för att kunna meddela kunden om olika saker, som att tillräcklig betalning erlagts eller om det uppstår problem med kortbetalning.


Class: CoffeeMachine

Properties

pricePerCup
type: number (SEK)
initial value: 10

totalMoneyInMachine
type: number (SEK)
initial value: 0
The total money from sales
since the machine was last emptied.

insertedMoneySinceLastCup
type: number (SEK)
initial value: 0
Money inserted since the last
cup was bought. Check when
chosen beverage is called to see if
the customer paid enough.

totalAmountOfCoffee
typ: number (grams)
initial value: 0
Total amount of ground coffee
that has been put in to the machine 
to be used when brewing.

totalAmountOPowderedMilk
typ: number (grams)
initial value: 0
Total amount of powdered milk
that has been put in to the machine 
to be used when brewing.

totalAmountOChocolatePowder
typ: number (grams)
initial value: 0
Total amount of chocolate powder
that has been put in to the machine 
to be used when brewing.

totalNumberOfPlasticCups
type: number (pieces)
initial value: 0
Total number of plastic cups the machine 
has available to server beverages.


coffeePerCup
type: number (grams)
initial value: 13
Amount of ground coffee per cup when
brewing.

waterPerCup
type: number (decilitres)
initial value: 2
Amount of water to use when 
brewing a cup of coffee.

powderedMilkPerCup
type: number (grams)
initial value: 4
Amount of powdered milk to add
to coffee if customer chooses it.

chocolatePowderPerCup
type: number (grams)
initial value: 10
Amount of chocolate powder to
be used when serving hot
chocolate.

Methods

+Metoder för underhåll

fillWithCoffeePowder()
add coffee to totalAmountOfCoffee

fillWithPowderedMilk()
add powdered milk to totalAmountOPowderedMilk
fillWithChocolatePowder()
add chocolate powder to totalAmountOfChocolatePowder


cancel()
called when the cancel buttons is pressed
return value: number, money inserted since last cup to the customer

insertMoney(amount)
argument amount, number (sek)
return value: nothing

chooseCoffee()
called when customer presses the
button for a black cup of coffee.
return value: string, type of beverage bought

chooseCoffeeWithMilk()
called when customer presses the
button for a cup of coffee with milk.
return value: string, type of beverage bought

chooseHotChocolate()
called when customer presses the
button for a cup of hot chocolate.
return value: string, type of beverage bought