Feature:Google main page


    I want to open a search engine

    @focus
    Scenario:Openning a search engine page
        Given I open Google page
        Then I see "Google" in title
        Then I see "google" in url