describe('Navegar por el DOM', () => {
  it('buscar los hijos de la lista de cosas', () => {
    cy.visit('http://localhost:8080');

    cy.get('#listaCosas')
      .children()
      .should('have.length', 3);

    cy.get('#listaCosas')
      .children()
      .first()
      .should('have.text', 'Cosa 1')

    cy.get('#listaCosas')
      .children()
      .eq(1)
      .should('have.text', 'Cosa 2')

    // cy.get('#titulo')
    //   .then((titulo) => {
    //     console.log(titulo.text());
    //   })

    cy.get('#listaCosas')
      .children()
      .each((li, index) => {
        const num = index + 1;
        expect(li.text()).be.eq('Cosa ' + num);
      })
  });

  it('Ej tablas', () => {
    /**
     * 1: Buscar la tabla de Company, Contact y Country
     * 2: Comprobar que tiene el número de filas correctas (7)
     * 3: Comprobar que la última fila tiene 3 celdas
     * 4: Comprobar que todas las celdas no tienen un texto vacío
     * 5: Comprobar que después de la fila 5 hay 2 más
     */

  })
});