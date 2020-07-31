module.exports = {

    url: 'http://localhost:3000/newsfeed',


  elements: {
     
    newsfeedButton: by.xpath('/html/body/div/div/div/header/nav/div/div[1]/a[1]')
  },
  
    userInput: function() {
    
     
        var selectorButton=page.newsfeed.elements.newsfeedButton;

  
         return driver.findElement(selectorButton).click();
}};  

