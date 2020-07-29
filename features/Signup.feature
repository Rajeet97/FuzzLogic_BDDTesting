@search
Feature:Register in Covid-19 care
  As a part of Covid-19
  In order to login to the application
  I want to register
  
  Scenario:Register in Covid-19 care
   Given I am on Covid-19 registration  page
    When I enter "samusharma" and I enter "sandhi" and  I enter "sandhi234@gmail.com" and I enter "samiksha124" I click signup button
    Then I should see "User was registered successfully!" in the registration results
