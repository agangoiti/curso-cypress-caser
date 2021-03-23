describe('Interacciones con elementos', () => {
  xit('click - aceptar cookies de w3schools', () => {
    cy.visit('https://www.w3schools.com/html/html_tables.asp');
    cy.get('#accept-choices')
      .click();
  });

  it('si pulsas el botón de borrar, quita el valor del input', () => {
    cy.visit('http://localhost:8080');
    cy.get('#nombre')
      .type('Charly')
      .invoke('val')
      // .then(val => {
      //   console.log(val)
      // })
      .should('equal', 'Charly');

    cy.get('#btn-clear')
      .click();

    cy.get('#nombre')
      .invoke('val')
      .should('equal', '')
      .and('be.empty');
  })
});