const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

describe('Calculadora', () => {
  it('debería devolver 4 si sumas 2 y 2', () => {
    assert(2+2 === 4, 'La suma no funciona');
  })

  it('debería devolver 4 si sumas 2 y 2 (con chai)', () => {
    // assert(2+2 === 4, 'La suma no funciona');
    expect(2+2).to.equal(4);
    (2+2).should.to.equal(4);
    (2+2 === 4).should.be.true;
  })
})

describe('Aserciones con arrays y objetos', () => {
  it('el array debería tener 3 elementos y uno de ellos es loro', () => {
    const mascotas = ['perro', 'gato', 'loro'];
    expect(mascotas).have.lengthOf(3);
    mascotas.should.include('loro');
  })

  it('el objeto serie debería tener una propiedad titulo', () => {
    const serie = { titulo: 'The Walking Dead', finalizada: false };
    expect(serie).have.property('titulo');
    serie.finalizada.should.be.false;
  })
})