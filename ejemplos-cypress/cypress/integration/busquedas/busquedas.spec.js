describe('Búsquedas en', () => {
  describe('localhost:8080', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080');
    })

    xit('Busca el título Listados', () => {
      // cy.visit('http://localhost:8080');
      cy.get('#titulo')
        .should('have.text', 'Listados');
        // elemento.should.have.text('Listados');
    });

    xit('Busca el Cosa 2 de la lista 2', () => {
      // cy.visit('http://localhost:8080');
      cy.get('ul#listaCosas')
        .find('.li2')
        .should('have.text', 'Cosa 2');

        // cy.get('ul#listaCosas > .li2')
        // cy.get('ul#listaCosas .li2')

        // NO SE PUEDE HACER ESTO
        // cy.find('#listaCosas > .li2');
    });

    xit('Busca el Item 3 de la lista 1', () => {
      // cy.visit('http://localhost:8080');
      cy.contains('li', 'Item 3')
        .should('have.text', 'Item 3');
      // cy.contains('Item 3');
      // cy.get('#listaItems').contains('Item 3');
    });

    it('Busca el botón perezoso', () => {
      cy.get('#btn-lazy-5500', {
          timeout: 5500
        })
      // cy.get('#caja-retry-ability')
        // .find('#btn-lazy-5500', {timeout: 5500})
        .should('have.text', 'Soy un botón más perezoso todavía');

      cy.get('#btn-lazy-3500')
        .should('have.text', 'Soy un botón perezoso');
    });
  })

  xdescribe('todomvc', () => {
    xit('el placeholder del input tiene el texto correcto', () => {
      cy.visit('https://todomvc.com/examples/vue/');

      cy.get('input.new-todo')
        .should('have.attr', 'placeholder', 'What needs to be done?');
        // .should('have.attr', 'placeholder')
        // .and('equal', 'What needs to be done?');
        // .and('include', 'What needs to be done?');
    })
  })
});
