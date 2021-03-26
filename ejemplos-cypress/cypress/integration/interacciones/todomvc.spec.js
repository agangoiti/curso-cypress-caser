// MOCHA -> describe / it / beforeEach
// CHAI -> lo que vea en el should -> 'have.text' / 'include' / 'have.length'  y la función expect (dentro de each / then)
// jQUERY -> lo que hay dentro de los each / then (OJO: tambien se puede usar cy dentro y expect (de CHAI))
// CYPRESS -> todo lo que va encadenado cy.<loquesea>


describe('Todo MVC', () => {
  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/vue/');
  })

  it('debería de añadir varias tareas correctamente', () => {
    cy.get('input.new-todo')
      .type('Tarea 1{enter}Tarea 2{enter}Tarea 3{enter}');

    cy.get('ul.todo-list > li.todo')
      .should('have.length', 3);
  })

  it('debería filtrar las tareas y mostrar solo las completadas al pulsar sobre Completed', () => {
    cy.get('input.new-todo')
      .type('Tarea 1{enter}Tarea 2{enter}Tarea 3{enter}');

    // cy.get('ul.todo-list > li.todo input[type=checkbox]')
    //   .eq(0).click()
    // cy.get('ul.todo-list > li.todo input[type=checkbox]')
    //   .eq(2).click()

    cy.get('ul.todo-list > li.todo input[type=checkbox]')
      .each((input, index) => {
        // jQuery
        if ([0, 2].includes(index)) {
          input.trigger('click')
        }
      })

    // cy.get('ul.filters > li')
    //   .eq(2)
    //   .click();

    cy.contains('a', 'Completed').click();

    cy.get('ul.todo-list > li.todo')
      .should('have.length', 2);
      // li.should.have.lengthOf(2)


    cy.get('button.clear-completed').click();

    cy.get('ul.todo-list > li.todo')
      .should('have.length', 0);

    cy.contains('a', 'All').click();

    cy.get('ul.todo-list > li.todo')
      .should('have.length', 1);
  })
})