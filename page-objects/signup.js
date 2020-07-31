module.exports = {

    url: 'http://localhost:3000/register',

    elements: {
        searchInputfullName: by.name('fullname'),
        searchInputName: by.name('username'),
        searchInputEmail: by.name('email'),
        searchInputPassword: by.name('password'),
   // SignupButton: by.xpath('/html/body/div/div/div/div/div[2]/div/form/div/div[5]/button'),
    },
  
    userInput: function (userfullName,userName, userEmail,userPassword) {

        var selectorfullName = page.signup.elements.searchInputfullName;
        var selectorName = page.signup.elements.searchInputName;
        var selectorEmail = page.signup.elements.searchInputEmail;
        var selectorPassword = page.signup.elements.searchInputPassword;
       // var selectorButton=page.signup.elements.signupButton;

            driver.findElement(selectorfullName).sendKeys(userfullName, selenium.Key.ENTER);
            driver.findElement(selectorName).sendKeys(userName, selenium.Key.ENTER);
           driver.findElement(selectorEmail).sendKeys(userEmail, selenium.Key.ENTER);
          return  driver.findElement(selectorPassword).sendKeys(userPassword, selenium.Key.ENTER);
         //return driver.findElement(selectorButton).click();
           
    }

    
};
