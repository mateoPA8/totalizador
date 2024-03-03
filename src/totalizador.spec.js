
import calcularPrecioNeto from "./calcularPrecioNeto";
import calcularImpuesto from "./calcularImpuesto";
import calcularDescuento from "./calcularDescuento";
import calcularCategorizacionProductos from "./calcularCategoriazcionProductos";
import categoriasProductos from "./productos";
let producto1=categoriasProductos.Bebidas;
describe("Totalizar", () => {
  it("deberia calcular el precio neto multiplicando la cantidad de items por el precio ingresado", () => {
    expect(calcularPrecioNeto(2, 3)).toEqual(6);
  });
  it("deberia calcular el impuesto para California segun el precio neto", () => {
    expect(calcularImpuesto(49, "CA")).toEqual(4.0425);
  });
  it("deberia calcular el impuesto para Nevada segun el precio neto", () => {
    expect(calcularImpuesto(49, "NV")).toEqual(3.92);
  });
  it("deberia calcular el impuesto para Utah segun el precio neto", () => {
    expect(calcularImpuesto(49, "UT")).toEqual(3.2585);
  });
  it("deberia calcular el impuesto para texas segun el precio neto", () => {
    expect(calcularImpuesto(49, "TX")).toEqual(3.0625);
  });
  it("deberia calcular el impuesto para alabama segun el precio neto", () => {
    expect(calcularImpuesto(49, "AL")).toEqual(1.96);
  });
  it("deberia ser 0 el impuesto si el precio neto es menor que 1000", () => {
    expect(calcularDescuento(49)).toEqual(0);
  });
  it("deberia ser 3% el impuesto si el precio neto es mayor o igual que 1000 y menor que 1500", () => {
    expect(calcularDescuento(1500)).toEqual(45);
  });
  it("deberia ser 5% el impuesto si el precio neto es mayor o igual que 3000 y menor que 7000", () => {
    expect(calcularDescuento(4000)).toEqual(200);
  });
  it("deberia ser 7% el impuesto si el precio neto es mayor o igual que 7000 y menor que 10000", () => {
    expect(calcularDescuento(8500)).toEqual(595);
  });
  it("deberia ser 10% el impuesto si el precio neto es mayor o igual que 10000 y menor que 15000", () => {
    expect(calcularDescuento(13000)).toEqual(1300);
  });
  it("deberia ser 15% el impuesto si el precio neto es mayor o igual que 15000", () => {
    expect(calcularDescuento(18000)).toEqual(2700);
  });
  it("deberia ser 63.75% el precio total tomando en cuenta 20 productos valiendo 3 cada uno, impuesto para texas de 3.75 y 0 de descuento", () => {
    expect((20*3+3.75-0)).toEqual(63.75);
  });
  it("deberia ser 3.43 el impuesto por bebidas alcoholicas", () => {
    expect(calcularCategorizacionProductos(producto1,49)).toEqual(3.43);
  });
});
