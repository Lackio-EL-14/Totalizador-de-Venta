import totalizador from "./totalizador";

describe('Totalizador', () => {
  it('deve debolver una cantidad de items que el usuario ingrese', () => {
    expect(totalizador(1)).toEqual({cantidad: 1, precio: undefined});
  });
  it('deve debolver cualquier cantidad de items que el usuario ingrese', () => {
    expect(totalizador(1000)).toEqual({cantidad: 1000, precio: undefined});
  });
  it('debe devolver un precio que el usuario ingrese', () => {
    expect(totalizador(1, 100)).toEqual({ cantidad: 1, precio: 100 });
  });
});