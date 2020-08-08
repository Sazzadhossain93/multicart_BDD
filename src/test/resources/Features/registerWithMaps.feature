Feature: User registration feature

  Scenario: User should be able to register
    Given user opens the browser
    When user goes to the loginpage
    And user goes to the registration form
    And user enters registration details
      | Email               | Username | Password     | Firstname | Lastname | Address           |
      | sadman123@gmail.com | Sam      | Sadmansiam12 | Sazzad    | Hossain  | 123 weldon street |
    
    Then user close the browser
