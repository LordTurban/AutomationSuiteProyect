class HomePage {
    elements = {
        searchBar : () => cy.get('[id="twotabsearchtextbox"]'),
    }

    searchForSomething(searchPrompt) {
        this.elements.searchBar().type(searchPrompt).type('{enter}');
    }
}

export default new HomePage();