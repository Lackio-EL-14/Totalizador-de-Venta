import totalizador from "./totalizador";

describe('Totalizador', () => {
  it('deve debolver una cantidad de items que el usuario ingrese', () => {
    expect(totalizador(1)).toEqual(1);
  });
});