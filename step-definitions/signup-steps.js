module.exports = function () {
    this.Given(/^I am on Covid-19 registration  page$/, function () {

        // load Covid-19  registration page
        return helpers.loadPage(page.signup.url);
    });
    this.When(/^I enter "([^"]*)" and I enter "([^"]*)" and  I enter "([^"]*)" and I enter "([^"]*)" I click signup button$/, function ( userfullName, username, userEmail,userPassword) {

    page.signup.userInput( userfullName, username,userEmail,userPassword);

     return driver.findElement(By.xpath('/html/body/div/div/div/div/div[2]/div/form/div/div[5]/button')).click();


    });
    this.Then(/^I should see "([^"]*)"User was registered successfully! in the registration results$/, function (expectedText) {
        return driver.findElement(By.xpath('/html/body/div/div/div/div/div[2]/div/form/div/div'))
        .getText().then(textValue => {
          assert.equal(expectedText, textValue);
        });
     });
   
      
};
