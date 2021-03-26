describe('Prueba de Cypress Studio', () => {
  it('Prueba 1', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:8080');
    cy.get('#modoEdicion').uncheck();
    cy.get('#nombre').clear();
    cy.get('#nombre').type('Charly');
    cy.get('[data-cy=p7]').click();
    cy.get('[data-cy=p0]').click();
    cy.get('[data-cy=p1]').click();
    cy.get('[data-cy=p6]').click();
    cy.get('[data-cy=pdel]').click();
    cy.get('[data-cy=pdel]').click();
    /* ==== End Cypress Studio ==== */
  });
});