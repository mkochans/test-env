Feature: Physitrack Home Assignment

Scenario: Assign plan to Demo patient
    Given User logs to Physitrack UK
    And User clicks on "USA" in element "countryPopUpItem"
    When User assign "Bird dog" to an excerise plan
    Then Exercise "Bird dog" should be assignet to patient

