
import calcularPrecioNeto from "./calcularPrecioNeto";
import calcularImpuesto from "./calcularImpuesto";
import calcularDescuento from "./calcularDescuento";
import categoriasProductos from "./productos";
import calcularImpuestosProductos from "./calcularImpuestosProductos";
import calcularDescuentosProductos from "./calcularDescuentosProductos";

const cantidadItems_input = document.querySelector("#cantidad-items");
const precioItems_input= document.querySelector("#precio-items");
const opcionesSelect = document.querySelector('#opciones');
const opcionesCategoria = document.querySelector('#categoria');
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = cantidadItems_input.value;
  const precio = precioItems_input.value;
  const estado = opcionesSelect.value;
  const categoria=opcionesCategoria.value;
  const precioNeto = calcularPrecioNeto(cantidad, precio);
  const descuento=calcularDescuento(precioNeto);
  const impuesto = calcularImpuesto(precioNeto,estado);
  div.innerHTML = "<p>" + "Precio neto: " + precioNeto + "</p>";
  div.innerHTML += "<p>" + "Descuento: "+ descuento +"$"+ "</p>";
  div.innerHTML += "<p>" + "Impuesto para " + estado +":"+ impuesto +"$"+ "</p>";
  const precioTotal=precioNeto+impuesto-descuento;
  div.innerHTML += "<p>" + "Precio total (impuesto, descuento): "+ precioTotal +"$"+ "</p>";
  let tipoProductoEscogido;
  console.log(categoria);
  if(categoria in categoriasProductos)
  {
    tipoProductoEscogido=categoriasProductos[categoria];
    console.log(tipoProductoEscogido);
    const impuestoSegunProducto=calcularImpuestosProductos(tipoProductoEscogido,precioNeto);
    const descuentoSegunProducto=calcularDescuentosProductos(tipoProductoEscogido,precioNeto);
    div.innerHTML += "<p>" + "Impuesto para la categoria "+ categoria + "(" + tipoProductoEscogido.Impuesto+ "%): " +impuestoSegunProducto+ "$"+"</p>";
    div.innerHTML += "<p>" + "Descuento para la categoria "+ categoria + "(" + tipoProductoEscogido.Descuento+ "%): " +descuentoSegunProducto+ "$"+"</p>";
  }
  
  
});
