class ResultsPage {
    elements = {
        searchResultsTitle : () => cy.get('[data-csa-c-content-id="desktop/1/0/default/default"]'),
    }
}

export default new ResultsPage();