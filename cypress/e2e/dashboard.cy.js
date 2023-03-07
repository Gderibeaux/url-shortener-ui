describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

it('should be able to see page title and exisiting shorten urls', () => {
  cy.get('div[class="url"]').should('be.visible')
})


})