import HomePage from "../../pages/homePage"

describe('Testing', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com')
  })

  it('Something is going to be typed on the Search Bar', () => {
    HomePage.searchForSomething();
  })
})
