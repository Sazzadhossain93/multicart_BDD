Feature: User registration feature

Scenario Outline: User should be able to register

Given user opens the browser
When user goes to the loginpage
And user goes to the registration form
And user enters "<Email>" and "<Username>" and "<Password>" and "<Firstname>" and "<Lastname>" and "<Address>" and submit the form
Then user close the browser

Examples:

| Email               | Username | Password     | Firstname | Lastname | Address           |
| sadman123@gmail.com | Sam      | Sadmansiam12 | Sazzad    | Hossain  | 123 weldon street |
        