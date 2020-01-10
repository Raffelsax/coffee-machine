Feature:
  As a coffee buyer
  I want a basic machine that
  I can put a 10 kr coin in
  and get a black cup of coffee back
  because I crave hot chocolate.

  Background:
    Given that the customer has inserted enough money
    And the user presses the hot chocolate button

  Scenario: Missing chocolate powder
    Given that the machine is plugged in
    And that water is available
    And that the machine don´t have enough chocolate powder
    And the machine has plastic cups
    Then the customer gets no chocolate
    And the display shows "Out of chocolate powder"

  Scenario: Missing plastic cups
    Given that the machine is plugged in
    And that water is available
    And that the machine have enough chocolate powder
    And the machine has no plastic cups
    Then the customer gets no coffee
    And the display shows "Out of plastic cups"

  Scenario: Missing water
    Given that the machine is plugged in
    And that water is not available
    And that the machine have enough chocolate powder
    And the machine has plastic cups
    Then the customer gets no coffee
    And the display shows "No water available"