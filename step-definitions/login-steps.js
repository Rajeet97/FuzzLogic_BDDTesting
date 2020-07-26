module.exports = function () {
    this.Given(/^I am on Covid-19 login page$/, function () {

        // load Covid-19 page
        return helpers.loadPage(page.login.url);
    });
    this.When(/^I enter "([^"]*)" and I enter "([^"]*)" and I click login$/, function (userEmail,userPassword) {

   	return page.login.userInput(userEmail,userPassword);
 



    });
    this.Then(/^I should see "([^"]*)"User Information in the results$/, function (expectedText) {
        return driver.findElement(By.xpath('/html/body/div/div/div/div/form/h2'))
        .getText().then(textValue => {
          assert.equal(expectedText, textValue);
        });
     });
   
     
};
