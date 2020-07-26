const { Button } = require("selenium-webdriver");

module.exports = function () {
    this.Given(/^I am on Covid-19 newsfeed page$/, function () {

        // load Covid-19  Newwsfeed page
        return helpers.loadPage(page.newsfeed.url);
    });
    this.When(/^I am on newsfeed page and I click newsfeed button$/, function () {

   return page.newsfeed.userInput();

     


    });
    this.Then(/^I should see "([^"]*)" in the news$/, function (expectedText) {
        return driver.findElement(By.xpath('/html/body/div/div/div/div/div/div/h1'))
        .getText().then(textValue => {
          assert.equal(expectedText, textValue);
        });
     });
   
      
};
