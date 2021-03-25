describe('Fixtures', () => {
  beforeEach(() => {
    cy.fixture('datosLogin.json').as('datosLogin');
    cy.visit('http://localhost:8080/login')
  })

  it('si te logueas con el usuarioOk vas a la página de bienvenida', () => {
    cy.get('@datosLogin')
      .then(datos => {
        console.log(datos);
        const usuario = datos.usuarioOk;

        cy.login(usuario);
        // cy.get('#email')
        //   .type(usuario.email);
        // cy.get('#password')
        //   .type(usuario.password);
        // cy.contains('button', 'Sign In')
        //   .click();

        cy.get('h1')
          .should('have.text', 'Bienvenido a la página');
        cy.location('pathname')
          .should('equal', '/')
      })
  });

  it('si te logueas con el usuarioKo te quedas en el login', () => {
    cy.get('@datosLogin')
      .then(({usuarioKo}) => {
        // const usuario = datos.usuarioKo;
        cy.login(usuarioKo);
        // cy.get('#email')
        //   .type(usuario.email);
        // cy.get('#password')
        //   .type(usuario.password);
        // cy.contains('button', 'Sign In')
        //   .click();

        cy.location('pathname')
          .should('equal', '/login')
        cy.get('form')
          .should('exist');
      })
  });
});