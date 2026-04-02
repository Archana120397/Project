Feature: Login Functionality

Background:
  Given user is on login page

  Scenario: Valid Login
    Given user is on login page
    When user enters valid username and password
    Then user should navigate to dashboard

  Scenario: Invalid - Only Username
    Given user is on login page
    When user enters only username
    Then error message should be displayed

  Scenario: Invalid - Only Password
    Given user is on login page
    When user enters only password
    Then error message should be displayed