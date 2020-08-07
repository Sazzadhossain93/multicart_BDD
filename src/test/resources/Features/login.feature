#Feature: User login feature
#
#Scenario: user should be able to login
#
#Given user opens the browser
#When user goes to the loginpage
#And user puts "user" and "pass"
#And user logs into the system
#And user sees title of the page is Wildfire Cart
#Then user close the browser
#

#
#
Feature: User login feature

Scenario Outline: user should be able to login

Given user opens the browser
When user goes to the loginpage
And user puts "<username>" and "<password>"
And user logs into the system
And user sees title of the page is Wildfire Cart
Then user close the browser

Examples:
         
        | username | password | 
        | user     |   pass   |
        | Siam     | Siam123  |
        #
        
        

        