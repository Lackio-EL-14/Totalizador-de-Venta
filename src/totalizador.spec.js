import totalizador from "./totalizador";

describe('Totalizador', () => {
  it('deve debolver una cantidad de items que el usuario ingrese', () => {
    expect(totalizador(1)).toEqual(1);
  });
  it('deve debolver cualquier cantidad de items que el usuario ingrese', () => {
    expect(totalizador(1000)).toEqual(1000);
  });
});