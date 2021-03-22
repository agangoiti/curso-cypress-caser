describe('Búsquedas', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  })

  it('Busca el título Listados', () => {
    // cy.visit('http://localhost:8080');
    cy.get('#titulo')
      .should('have.text', 'Listados');
  });

  it('Busca el Cosa 2 de la lista 2', () => {
    // cy.visit('http://localhost:8080');

  });

  it('Busca el Item 3 de la lista 1', () => {
    // cy.visit('http://localhost:8080');

  });
});