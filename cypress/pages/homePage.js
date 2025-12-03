class HomePage {
    elements = {
        searchBar : () => cy.get("#APjFqb"),
    }

    searchForSomething() {
        this.elements.searchBar().type('Something');
    }
}

export default new HomePage();