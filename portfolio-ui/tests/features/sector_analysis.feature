Feature: Sector analysis
  Some descriptive text here
  
  Scenario: Summary bar
    Some descriptive text here
  
    Given that I am a portfolio manager
    And I am on the holdings page
    Then I am able to see that the total value of my portfolio is "1329617197"
    And the daily percent return of my portfolio is "19.11"
    And the annual percent return of my portfolio is "22.47"

  Scenario: View sectors
    Some descriptive text here
  
    Given that I am a portfolio manager
    And I am on the holdings page
    Then I am able to see my sectors
    
  Scenario: View holdings
    Some descriptive text here
  
    Given that I am a portfolio manager
    And I am on the holdings page
    Then I am able to see my holdings
    And the holding portfolio percentages add up to 100%
    
  Scenario: Filter holdings by sector
    Some descriptive text here
  
    Given that I am a portfolio manager
    And I am on the holdings page
    When I select the sector called "technology"
    Then the holdings are filtered by the "technology" sector