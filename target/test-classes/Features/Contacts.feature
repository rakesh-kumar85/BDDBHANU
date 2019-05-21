Feature: Check Contacts

#Scenario: Data entry for conatcts
#Given User is on the CRM first page
#When  User enters the "naveenautomation" and "test@123" and login
#When  User is on home page
#Then  User clciks on contacts link
#Then  Close the browser

Background: User navigates to application url
Given User is on the CRM first page "https://www.ultimateqa.com/automation/" 
Scenario Outline: Data from local
When  User enters the " <userid> " and " <password> " and login
When  User is on home page
Then  User clciks on contacts link
Then  Close the browser
Examples:
| userid          | password      |
| naveenautomation| test@123      |