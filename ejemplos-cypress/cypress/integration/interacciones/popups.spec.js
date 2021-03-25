describe('Popups (eventos)', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080', {
      onBeforeLoad: (win) => {
        cy.stub(win, 'prompt').returns('Charly Falco');
      }
    });
  })

  it('debería mostrarse Hola mundo en el alert', () => {
    cy.get('#btn-alert')
      .click();

    cy.on("window:alert", (textoDelAlert) => {
      expect(textoDelAlert).to.be.equal('Hola mundo!!!');
    });
  });

  it('debería eliminarse el mensaje si pulsamos Aceptar', () => {
    cy.get('#btn-confirm')
      .click();

    cy.on("window:confirm", () => true);
    cy.get('#confirm-nombre')
      .should('have.text', '');
  });

  it('no debería eliminarse el mensaje si pulsamos Cancelar', () => {
    cy.get('#btn-confirm')
      .click();

    cy.on("window:confirm", () => false);
    cy.get('#confirm-nombre')
      .should('have.text', 'The Marathon Continues');
  });


  it('debería mostrar el nombre que se escribe en el popup', () => {
    cy.get('#btn-prompt')
      .click();

    cy.get('#prompt-nombre')
      .should('have.text', 'Charly Falco');
  });
});