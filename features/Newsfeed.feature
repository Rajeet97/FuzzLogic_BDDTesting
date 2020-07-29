@search
Feature: View news of Covid-19
  As a part of Covid-19
  In order to view news in the application
  I want to view news
  
  Scenario: View news of Covid-19
   Given I am on Covid-19 newsfeed page
    When I am on newsfeed page and I click newsfeed button
    Then I should see "Covid-19 Related News Feed" in the news



    