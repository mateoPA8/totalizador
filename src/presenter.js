
import calcularPrecioNeto from "./calcularPrecioNeto";
import calcularImpuesto from "./calcularImpuesto";
const cantidadItems_input = document.querySelector("#cantidad-items");
const precioItems_input= document.querySelector("#precio-items");
const opcionesSelect = document.querySelector('#opciones');
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = cantidadItems_input.value;
  const precio = precioItems_input.value;
  const estado = opcionesSelect.value;
  const precioNeto = calcularPrecioNeto(cantidad, precio);
  console.log(estado);
  const impuesto = calcularImpuesto(precioNeto,estado);
  div.innerHTML = "<p>" + "Precio neto: " + precioNeto + "</p>";
  div.innerHTML += "<p>" + "Impuesto: " + impuesto + "</p>";
  
});
