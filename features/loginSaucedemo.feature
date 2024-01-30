Feature: Login SauceDemo

  Scenario Outline: As a user, I should be prevented from loging with wrong credentials
    Given I'm on the login page
    When I enter my <username> and <password>
    And I click login button
    Then I should the a error <message>

    Examples: 
      | username      | password | message                            |
      |               |         | Epic sadface: Username is required |
      | lux           |         | Epic sadface: Password is required |
      | standard_user |         | Epic sadface: Password is required |

  Scenario: As a user, I should be navigated to the products page when enter my correct credential
    Given I'm on the login page
    When I have entered my correct credentials
    And I click login button
    Then I should be navigated to products page
