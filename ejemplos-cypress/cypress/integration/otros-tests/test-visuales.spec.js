describe('Test visual', () => {
  it('la caja azul no cambia de tamaño ni color', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#caja-doble-click')
      .matchImageSnapshot();
  });
});