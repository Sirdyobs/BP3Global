Feature: User Roles
##################################################################################
###### Standard User
##################################################################################

  Scenario: As a standard_user, I should be able to be able to perfom a checkout successfully
    Given I have logged-in to saucedemo and products are displayed
    When I choose a products
    And click add to cart
    And I click on the cart icon
    And I click checkout
    And I enter my user details
    And I click continue button
    And I should see checkout summary displayed
    And I click finish button
    Then I should see text Checkout:Complete and text Thank you for your order
