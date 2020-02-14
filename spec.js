var testdata = require('../TASKSUADE/xpathrepository.json');
// Suade Labs Test: Scenario-1: Unit, Integration and User Story tests
describe('Launch the AngularJS application for tests',function()
{
    // Scenario-1: Unit Test Case
    it('Unit Test: To check if the page has loaded successfully, Searching for multiple elements on page',function()
        {
         //Launch the URL  
        browser.get(testdata.elements.url);
        //Maximize the window
        browser.driver.manage().window().maximize();
        //Get the learn value by xpath
        var learn=element(by.xpath(testdata.elements.learn));
        //Verify that Learn string is there in the page
        expect(learn.isDisplayed()).toBe(true);
        //Get the Angular value by xpath
        var Angularname = element(by.xpath(testdata.elements.angularName));
        //Verify that Angular string is there in the page
        expect(Angularname.isDisplayed()).toBe(true);
        //Get the Develop value by xpath
        var developname=element(by.xpath(testdata.elements.developName));
        //Verify that Develop string is there in the page
        expect(developname.getText()).toContain(testdata.elements.developNames);
        //Verify that there is a Textbox by using the xpath
        expect(element(by.xpath(testdata.elements.textValue)));
        //Enter the value in the Textbox
        element(by.model('yourName')).sendKeys(testdata.elements.companyName);
        browser.sleep(2000);
        //Verify that whatever we entered is there are not
        expect(element(by.xpath(testdata.elements.suadeName)).getText()).toContain(testdata.elements.suadeNames)
        });

     // Scenario-1: Integration Test Case
     it('Integration Test: To check interface between two windows in the same application',function()
        {
        //Refresh the browser
        browser.refresh();
        //Wait for the browser
        browser.sleep(3000);
        //Click on Try the new angular button
        element(by.xpath(testdata.elements.angularButton)).click();
        //After clicking on the button wait for the page
        browser.sleep(6000);
        //To handle the another using this window functionality
        browser.getAllWindowHandles().then(function(handles){
        browser.switchTo().window(handles[1]).then(function(){
        //Get the xpath of Angular image     
        var image=element(by.xpath(testdata.elements.angularImage));
        //Verify that Image is dispalyed correctly
        expect(image.isDisplayed()).toBe(true);
        
        });
        });
        });

        // Scenario-1: User Story Test Case
        it('User Story: User trying to understand about libraries in AngularJS in New Angular Page',function()
        {
        //click on the Get started button
        element(by.xpath(testdata.elements.getStarted)).click();
        browser.sleep(3000);
        //Verify that correct page title is there are not
        expect(element(by.xpath(testdata.elements.pageTitle)).getText()).toContain(testdata.elements.pageVerificationTitle);
        //Search value should be present in the textbox
        expect(element(by.xpath(testdata.elements.search)).isDisplayed()).toBe(true);
        //Enter Search value in the textbox as "Libraries"
        element(by.xpath(testdata.elements.search)).sendKeys(testdata.elements.searchValue);
        //click on "Overview of Angular Libraries"
        element(by.xpath(testdata.elements.angularLibraries)).click();
        //Wait for the browser to get the page what we are waiting for
        browser.sleep(2000);
        //Validate that "Overview of Angular libraries" page is dispalyed
        expect(element(by.xpath(testdata.elements.librariesValue)).isDisplayed()).toBe(true);
        //Click on create libraries link to see how it is rendering to the other page
        element(by.xpath(testdata.elements.createLibraries)).click();
        });
});  