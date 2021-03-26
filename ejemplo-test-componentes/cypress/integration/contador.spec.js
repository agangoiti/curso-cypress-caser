import { mount } from '@cypress/react';
import Contador from '../../src/components/Contador';

describe('Componente Contador', () => {
  it('La cuenta debería de incrementarse cuando pulsamos el +', () => {
    mount(<Contador />);

    cy.get('#cuenta')
      .should('have.text', 'Cuenta: 0');

    cy.get('#btnInc')
      .click();

    cy.get('#cuenta')
      .should('have.text', 'Cuenta: 1');
  })

  it('La cuenta debería decrementarse cuando pulsamos el -', () => {
    mount(<Contador />);

    cy.get('#cuenta')
      .should('have.text', 'Cuenta: 0');

    cy.get('#btnDec')
      .click();

    cy.get('#cuenta')
      .should('have.text', 'Cuenta: -1');
  })

  it('La cuenta debería empezar en 23', () => {
    mount(<Contador cuentaInicial="23" />);

    cy.get('#cuenta')
      .should('have.text', 'Cuenta: 23');
  })
})