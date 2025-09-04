import totalizador from "./totalizador";

describe('Totalizador', () => {
  it('deve debolver una cantidad de items que el usuario ingrese', () => {
    expect(totalizador(1)).toEqual({cantidad: 1, precio: undefined, estado: undefined});
  });
  it('deve debolver cualquier cantidad de items que el usuario ingrese', () => {
    expect(totalizador(1000)).toEqual({cantidad: 1000, precio: undefined, estado: undefined});
  });
  it('debe devolver un precio que el usuario ingrese', () => {
    expect(totalizador(1, 100)).toEqual({ cantidad: 1, precio: 100, estado: undefined });
  });
  it('debe devolver el estado y mostrar la eleccion', () => {
    expect(totalizador(1,100,"CA")).toEqual({cantidad: 1, precio: 100, estado:"CA"});
  });
});
