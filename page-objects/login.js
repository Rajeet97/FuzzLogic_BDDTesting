module.exports = {

    url: 'http://localhost:3000/login',

    elements: {
        searchInputEmail: by.name('username'),
        searchInputPassword: by.name('password'),
        loginButton: by.xpath('/html/body/div/div/div/div/div[2]/div/form/div[3]/button'),
    },
  
    userInput: function (userEmail,userPassword) {

        var selectorEmail = page.login.elements.searchInputEmail;
        var selectorPassword = page.login.elements.searchInputPassword;
        var selectorButton=page.login.elements.loginButton;

       
            driver.findElement(selectorEmail).sendKeys(userEmail, selenium.Key.ENTER);
            driver.findElement(selectorPassword).sendKeys(userPassword, selenium.Key.ENTER);
            return driver.findElement(selectorButton).click();
           
    }

    
};
