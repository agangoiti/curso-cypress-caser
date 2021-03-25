describe('Test condicional', () => {
  it('debería de poder escribir en el input', () => {
    const nombre = 'Un nombre cualquiera'

    cy.visit('http://localhost:8080');

    cy.get('#modoEdicion')
      .then(checkbox => {
        const isChecked = checkbox.prop('checked');
        if (isChecked) {
          checkbox.trigger('click');
        }
      })

      cy.get('#nombre')
        .type(nombre)
        .should('have.value', nombre);

  });

  it('solo se realiza la aserción si el campo está habilitado (checkbox desmarcado)', () => {
    const nombre = 'Un nombre cualquiera'

    cy.visit('http://localhost:8080');

    cy.get('#modoEdicion')
      .then(checkbox => {
        const isChecked = checkbox.prop('checked');
        if (!isChecked) {
          cy.get('#nombre')
            .type(nombre)
            .should('have.value', nombre);
        }
      })
  });
});