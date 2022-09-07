Feature: Ecommerce Site: Green Kart

    Scenario:  E-Commerce Product Delivery
        Given Open E-Commerce site
        And  Search Product which is start from ca
        And Add to cart Cashews
        When Place order and select  country
        Then Vallidate the Thank you message

