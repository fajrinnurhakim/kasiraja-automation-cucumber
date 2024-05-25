@login
Feature: kasirAja Login Tests

    @login @negative
    Scenario: Failed login with blank email and password
        Given User open kasirAja page
        When User didn't input an email and password
        Then User should see an error message

    @login @negative
    Scenario: Failed login with invalid email
        Given User open kasirAja page
        When User input invalid email and valid password
        Then User should see an error message

    @login @negative
    Scenario: Failed login with invalid password
        Given User open kasirAja page
        When User input valid email and invalid password
        Then User should see an error message

    @login @positive
    Scenario: Successfully login with valid credentials
        Given User open kasirAja page
        When User input valid credentials
        Then User should be on the Dashboard page