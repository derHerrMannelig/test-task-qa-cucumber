# test-task-qa-cucumber  
## Test case:  
**Title:** Login attempt without any credentials  
**Objective:** User shouldn't log into the secure area without valid credentials  
1. Given User is located on the main page of saucedemo website  
2. When User click “Login” button  
3. Then User should see “Epic sadface: Username is required” error message  
## Setup:  
1. Clone this repo;  
2. Execute `npm install` in terminal;  
3. Execute `npm run wdio` in terminal.  
