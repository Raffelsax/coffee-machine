Feature:
  As a coffee buyer
  I want a basic machine that
  I can put a 10 kr coin in
  and get a black cup of coffee with milk back
  because I crave caffeine and milk.

  Background:
    Given that the customer has inserted enough money
    And pressed coffee with milk button

  Scenario: Missing coffee powder
    Given that the machine is plugged in
    And that water is available
    And that the machine don´t have enough coffee
    And that the machine have enough milk powder
    And the machine has plastic cups
    Then the customer gets no coffee
    And the display shows "Out of coffee powder"

  Scenario: Missing milk powder
    Given that the machine is plugged in
    And that water is available
    And that the machine have enough coffee
    And that the machine have enough milk powder
    And the machine has plastic cups
    Then the customer gets no coffee
    And the display shows "Out of milk powder"

  Scenario: Missing plastic cups powder
    Given that the machine is plugged in
    And that water is available
    And that the machine have enough coffee
    And that the machine have enough milk powder
    And the machine has no plastic cups
    Then the customer gets no coffee
    And the display shows "Out of plastic cups"

  Scenario: Missing water
    Given that the machine is plugged in
    And that water is not available
    And that the machine have enough coffee
    And the machine has plastic cups
    Then the customer gets no coffee
    And the display shows "No water available"