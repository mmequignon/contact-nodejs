Feature: User can sort contacts

  Scenario: User sort contcts
    Given The contact list is displayed disordered
    When User clicks on the sort button
    Then Contact list is displayed sorted