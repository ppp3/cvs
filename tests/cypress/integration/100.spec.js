/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('http://www.gmx.de')
	cy.fixture('example').as('exampleJson')
  })


  it('cy.title() - get the title', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'Anmeldung')
  })
})
