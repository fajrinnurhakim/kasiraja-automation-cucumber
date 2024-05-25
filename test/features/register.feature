@register
Feature: kasirAja Register New User
 
    @register @positive
    Scenario: Successfully register with valid credentials
        Given User open Register page
        When User input valid data
        Then User should be on the Login page

    @register @negative
    Scenario: Failed register with blank all mandatory field
        Given User open Register page
        When User didn't input all mandatory field
        Then User should see register error message
    
    @register @negative
    Scenario: Failed register with invalid email
        Given User open Register page
        When User input valid nama toko, invalid email, and valid password
        Then User should see register error message

    