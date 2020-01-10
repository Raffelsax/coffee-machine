Feature:
  As a coffee buyer
  I want a basic machine that
  I can put a 10 kr coin in
  and get a black cup of coffee back
  because I crave caffeine.

  Scenario: Missing water
    Given that the machine is plugged in
    And there is no water
    Then the user gets no coffee

  Scenario: Missing power
    Given that the machine is not plugged in
    Then the user gets no coffee

