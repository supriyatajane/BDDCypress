Feature:regres api

    Scenario:Get user list

        Given User sent requset multiple user

        Then User list should be displayed

    Scenario Outline: create new user

        Given User sent the request to create new user with "<name>" and job "<job>"

        Then User should be created with "<name>" and job "<job>"


        Examples:
            | name    | job     |
            | supriya | Tester  |
            | rutuja  | Teacher |




