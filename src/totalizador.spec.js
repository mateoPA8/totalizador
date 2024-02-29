//import sumar from "./sumador.js";
import calcularPrecioNeto from "./calcularPrecioNeto";
describe("Totalizar", () => {
  it("deberia calcular el precio neto multiplicando la cantidad de items por el precio ingresado", () => {
    expect(calcularPrecioNeto(2, 3)).toEqual(6);
  });
});
