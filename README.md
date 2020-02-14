Scenario selected for implementation = Scenario1
Website chosen = https://angularjs.org/
Browser Used = Google Chrome
Google Chrome Version = 80.0.3987.106 (Official Build) (64-bit)

Environment Variables in System Properties:
JAVA_HOME = C:\Program Files\Java\jdk1.8.0_241\bin
Path = C:\Program Files\Java\jdk1.8.0_241\bin

Visual Studio Code Version = 1.42.1
Protractor Version used = 5.4.3
Jasmine Version = 3.5.0

*** Steps to Execute Tests ***
1. Make Sure Selenium Server is Up and Running before execution
2. In Visual Studio Code, Go to View-->Terminal.
3. enter following Commands: 
	a. npm init
	b. protractor conf.js



***Test Cases and Steps Followed***

Unit Test Case:
Purpose = To check if the page has loaded successfully, Searching for multiple elements on page
Steps:

1. Launch the Application
2. Check for Elements "Learn, Angular, Develop" as Strings available on the page
3. Enter "SUADE LABS" in text box in AngularJS Page.
4. Make sure "Hello SUADE LABS" is displayed.


IntegrationTest Case:
Purpose = To check interface between two windows in the same application
Steps:

1. Refresh the application
2. Click on "Try the new Angular" button. (It will be opened in a new window).
3. Verify we are in the New Angular page.
4. Verify the Angular image on the application.
Result: New Angular page should open in a new Chrome window., It should have correct elements / images.

User Story:
Purpose = User trying to understand about libraries in AngularJS in New Angular Page
Steps:

1. Click on "Get Started" button
2. Make sure the element "Getting Started with Angular: Your First App" is present as string. 
3. Search for "Libraries" in the search box.
4. Click on "Overview of Angular Libraries" from search results/suggestions.
5. Validate that "Overview of Angular libraries" page is dispalyed
6. Click on "Create Libraries" and it should navigate to respective page.

