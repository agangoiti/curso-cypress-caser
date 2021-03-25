describe('Spy - Stub - Intercept', () => {
  it('debería pintar el emoji ☀️ si el tiempo está soleado', () => {
    cy.intercept('/get-weather', { weather: 'soleado' });
    cy.visit('http://localhost:8080');

    cy.get('#tiempo')
      .should('have.text', '☀️');
  });

  it('debería pintar el emoji 🌨 si el tiempo es nevado', () => {
    cy.intercept('/get-weather', { weather: 'nevado' });
    // cy.intercept('/get-weather').as('getWeather');
    cy.visit('http://localhost:8080');

    // cy.wait('@getWeather');

    cy.get('#tiempo')
      .should('have.text', '🌨');
  });

  it('debería de mostrar que estamos en Harlan', () => {
    const coords = { latitude: '36.848044', longitude: '-83.320589' };
    cy.visit('http://localhost:8080', {
      onBeforeLoad: (win) => {
        cy.stub(win.navigator.geolocation, 'getCurrentPosition')
          .callsFake((callback) => {
            const position = { coords: coords };
            const position = { coords };
            callback(position)
          }).as('getPosition');
      }
    })

    cy.get('#btn-ubicacion')
      .click();

    cy.get('#ciudad')
      .should('have.text', 'Harlan');
    cy.get('@getPosition')
      .should('have.been.calledOnce');
  })
});