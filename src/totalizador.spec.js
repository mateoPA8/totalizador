
import calcularPrecioNeto from "./calcularPrecioNeto";
import calcularImpuesto from "./calcularImpuesto";
describe("Totalizar", () => {
  it("deberia calcular el precio neto multiplicando la cantidad de items por el precio ingresado", () => {
    expect(calcularPrecioNeto(2, 3)).toEqual(6);
  });
  it("deberia calcular el impuesto para California segun el precio neto", () => {
    expect(calcularImpuesto(49, "CA")).toEqual(4.0425);
  });
  
});
