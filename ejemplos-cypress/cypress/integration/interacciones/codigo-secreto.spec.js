describe('Código secreto', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  })

  it('debería mostrar CODE OK cuando introducimos el código correcto', () => {
    // 6710
    cy.get('[data-cy=p6]').click();
    cy.get('[data-cy=p7]').click();
    cy.get('[data-cy=p1]').click();
    cy.get('[data-cy=p0]').click();

    cy.get('#pantalla-codigo')
      .should('have.text', 'CODE OK');
  });

  it('debería borrar todos los números si pulsamos sobre el CLD', () => {
    cy.get('[data-cy=p6], [data-cy=p4], [data-cy=p0]').click({multiple: true});

    cy.get('[data-cy=pclear]').click()

    cy.get('#pantalla-codigo')
      .should('be.empty');
  });

  it('debería borrar el último número cuando pulsamos el DEL', () => {
    cy.get('[data-cy=p6], [data-cy=p4], [data-cy=p0]').click({multiple: true});
    cy.get('[data-cy=p1]').click()

    cy.get('#pantalla-codigo')
      .invoke('text')
      .should('have.length', 4);

    cy.get('[data-cy=pdel]').click()

    cy.get('#pantalla-codigo')
      .invoke('text')
      .should('have.length', 3)
      .and('not.include', '1');
  });

  it('si introducimos 4 números erroneos no añade más', () => {
    cy.get('[data-cy=p6], [data-cy=p4], [data-cy=p0], [data-cy=p8]')
      .click({multiple: true});

    cy.get('[data-cy=p1], [data-cy=p7]')
      .click({multiple: true});

    cy.get('#pantalla-codigo')
      .invoke('text')
      .should('have.length', 4)
      .and('not.include', '1')
      .and('not.include', '7');
  });
});