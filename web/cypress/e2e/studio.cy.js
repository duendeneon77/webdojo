describe('Studio', () => {
  it('exemplo do Cypress Studio', () => {
    cy.visit('http://example.cypress.io/')
    /* ==== Generated with Cypress Studio ==== */
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Deve logar com sucesso', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('#email').clear('pa');
    cy.get('#email').type('papito@webdojo.com');
    cy.get('#password').clear('ka');
    cy.get('#password').type('katana123');
    cy.get('.bg-\\[\\#8257E5\\]').click();
    cy.get('[data-cy="logged-user"]').click();
    cy.get('[data-cy="user-name"]').should('have.text', 'Fernando Papito');
    /* ==== End Cypress Studio ==== */
  });
})