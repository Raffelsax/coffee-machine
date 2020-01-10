Feature:
  As a coffee buyer
  I want a machine that
  I can put a 10 kr coin in
  and get a cup of coffee with milk back
  because I crave caffeine and milk.

  Background: Basic requirements for brewing coffee with milk
    Given that the machine is plugged in
    And that water is available
    And that the machine has enough ground coffee
    And that the machine has enough powdered milk
    And the machine has plastic cups

  Scenario Outline:
    When the user presses the button for a cup of coffee with milk
    And the user inserts a <money1> kr coin
    And the user inserts a <money2> kr coin
    And presses the "start" button
    Then the user recieves <cup> cup of coffee with milk.

    Examples:
      | money1     | money2 | cup |
      | 10         | 0      | 1   |
      | 5          | 5      | 0   |
      | 1          | 1      | 0   |
      | "byxknapp" | 1      | 0   |
      | 0          | 10     | 1   |

  Scenario: Card payment
    Given that the customer inserts a Card
    And the card type is accepted
    And there are enough money on the card
    And presses the "start" button
    Then the customer recieves a cup of coffee with milk