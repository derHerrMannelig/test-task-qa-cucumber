Feature: Login attempt without any credentials

  Scenario Outline: User shouldn't log into the secure area without valid credentials

    Given User is located on the main page of saucedemo website
    When User click “Login” button
    Then User should see “<message>” error message

    Examples:
      | message                            |
      | Epic sadface: Username is required |
