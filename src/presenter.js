
import calcularPrecioNeto from "./calcularPrecioNeto";
const cantidadItems_input = document.querySelector("#cantidad-items");
const precioItems_input= document.querySelector("#precio-items");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = cantidadItems_input.value;
  const precio = precioItems_input.value;

  div.innerHTML = "<p>" + "Precio neto: " + calcularPrecioNeto(cantidad, precio) + "</p>";
});
