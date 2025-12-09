import HomePage from "../../pages/homePage";
import ResultsPage from "../../pages/resultsPage";
import testData from "../../fixtures/testData.json" with { type: 'json'};

//let data = testData;

describe('Testing', () => {
  beforeEach(() => {
    cy.visit('https://www.amazon.com/')
  })

  it('Something is going to be typed on the Search Bar', () => {
    HomePage.searchForSomething(testData.searchPrompt);
    ResultsPage.elements.searchResultsTitle().should('contain.text', testData.searchPrompt);
  })
})
