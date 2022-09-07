Feature:Ecommerce site:automationtesing

    Scenario:Login with valid Credentials
        Given visit Practice Automation site
        And User log-in using Username and Password

            | username         | password    |
            | supriya@test.com | @Minskole12 |

        When User click on submit button
        Then Dashboard should be visible


    Scenario Outline:Login with valid Credentials
        Given visit Practice Automation site
        And User log-in using <Username> and <Password>
        When User click on submit button
        Then Dashboard should be visible

            | username          | password    |
            | supriya@test.com  | @Minskole12 |
            | abhijit@test.com  | @Minskole12 |
            | devanshi@test.com | @Minskole12 |