@search
Feature: Login
  As a registered Covid-19 user
  In order to logg in the application
  I want to login
  
  Scenario: Login
   Given I am on Covid-19 login page
    When I enter "sam" and I enter "sam123" and I click login
    Then I should see "User Information" in the results
