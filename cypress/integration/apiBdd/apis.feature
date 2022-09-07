Feature: Regres Api

    Scenario: GET user via Api
        Given user sent request for get multiple user
        Then user list should be displayed

    Scenario Outline:create user via post request
        Given  user sent request create new user with <name> and <job>
        Then user should be created <name> and <job>
        Examples:
            | name    | job       |
            | supriya | Tester    |
            | Abhii   | developer |
            | sara    | coder     |


    Scenario Outline: update user via PUT request
        Given user sent request the existing user update with <name> and <job>
        Then user should be updated <name> and <job>
        Examples:
            | name   | job |
            | sarika | HR  |
            | mayuri | MS  |
            | sujata | PO  |

     Scenario Outline: update user via PATCH request
     Given user sent request the existing data one single update with <name> and <job>
     Then user should be update particular field <name> and <job>
      Examples:
           | name    | job       |
            | supriya | Tester2    |
            | Abhii   | developer2 |
            | sara    | coder2    |
