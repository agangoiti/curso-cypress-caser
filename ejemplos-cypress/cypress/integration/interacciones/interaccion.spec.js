describe('Interacciones con elementos', () => {
  xit('click - aceptar cookies de w3schools', () => {
    cy.visit('https://www.w3schools.com/html/html_tables.asp');
    cy.get('#accept-choices')
      .click();
  });

  xit('si pulsas el botón de borrar, quita el valor del input', () => {
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

  xit('Marcar como hobbies tenis y cine', () => {
    cy.visit('http://localhost:8080');

    cy.get('[type=checkbox]').check(['tenis', 'cine']);
    cy.get('[type=checkbox]').uncheck('series');

    cy.get('[type=checkbox]:checked')
      .should('have.length', 2);
  })

  xit('debería cambiar el color de la caja cuando se hace doble click', () => {
    cy.visit('http://localhost:8080');

    cy.get('#caja-doble-click')
      .should('have.css', 'background-color', 'rgb(0, 0, 255)')
      .dblclick()
      .should('have.class', 'db-clicked')
      .should('have.css', 'background')
      .and('include', 'rgb(255, 255, 0)')
  })

  xit('debería buscar Hulk en la wikipedia', () => {
    cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada');

    cy.get('#searchInput')
      .type('Hulk')
      .parent()
      .parent()
      .submit();

    // cy.get('#searchform')
    //   .submit()

    cy.title()
      .should('equal', 'Hulk - Wikipedia, la enciclopedia libre');

    cy.get('#firstHeading')
      .should('have.text', 'Hulk');
  })

  xit('debería seleccionar una opción por su valor', () => {
    cy.visit('http://localhost:8080');

    cy.get('#select-coches-electricos')
      .select('xpeng-p7')
      .should('have.value', 'xpeng-p7');
  })

  xit('debería seleccionar una opción por su texto visible', () => {
    cy.visit('http://localhost:8080');

    cy.get('#select-coches-electricos')
      .select('Nio eT7')
      .should('have.value', 'nio-et7');
  })

  xit('debería seleccionar varias opciones por sus valores', () => {
    cy.visit('http://localhost:8080');

    cy.get('#select-coches-electricos-multiple')
      .select(['tesla-model-3', 'nio-et7', 'polestar-2']);

    cy.get('#select-coches-electricos-multiple option:selected')
      .should('have.length', 3);
  })

  xit('debería cambiar el texto de la caja destino cuando arrastramos sobre ella la caja origen', () => {
    cy.visit('http://cookbook.seleniumacademy.com/DragDropDemo.html');

    cy.get('#draggable')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { pageX: 170, pageY: 70 })
      .trigger('mouseup');

    cy.get('#droppable > p')
      .should('have.text', 'Dropped!');
  })

  xit('debería bajar el volumen a la mitad', () => {
    cy.visit('http://localhost:8080');

    cy.get('#volumen')
      .invoke('val', 50)
      .trigger('change')
      .should('have.value', 50);
  })

  xit('debería tener la cookie CONSENT si aceptamos todas las cookies', () => {
    cy.visit('https://www.w3schools.com/html/html_tables.asp');

    cy.get('#accept-choices')
      .click();
    cy.wait(3000)
    cy.getCookies();
      // .should('have.property', 'value', 'PENDING+073')

    // cy.getCookie('CONSENT')
    //   .should('have.property', 'value', 'PENDING+073')

  })

  it('debería crear una cookie y encontrarla después', () => {
    cy.visit('http://localhost:8080');

    cy.setCookie('mi-cookie', 'Esto es una cookie de prueba');

    cy.getCookie('mi-cookie')
      .should('have.property', 'value', 'Esto es una cookie de verdad')
  })

});