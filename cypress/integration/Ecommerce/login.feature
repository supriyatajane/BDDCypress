Feature:Practice Automation site

    Scenario:Login with valid craditials

        Given visit Ecommerce site

        When enter the username
            | username |
            | student  |

        And enter the password
            | password    |
            | Password123 |

        And click on login button
        Then Vallidate Dashboard

    Scenario Outline:Login with multiple user login
        Given Visit practice Automation site

        When user login with "<Username>" and "<Password>"

        And Click on login button

        Then Dashboard should be visible

        Examples:
            | Username          | Password    |
            | supriya@test.com  | @Minskole12 |
            | abhijit@test.com  | @Minskole12 |
            | devanshi@test.com | @Minskole12 |