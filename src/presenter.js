
import calcularPrecioNeto from "./calcularPrecioNeto";
import calcularImpuesto from "./calcularImpuesto";
import calcularDescuento from "./calcularDescuento";
import categoriasProductos from "./productos";
import calcularImpuestosProductos from "./calcularImpuestosProductos";
import calcularDescuentosProductos from "./calcularDescuentosProductos";
import calcularPesoVolumetrico from "./calcularPesoVolumetrico";
import calcularDescuentoFinal from "./calcularDescuentoFinal";
import calcularDescuentosPorEnvio from "./calcularDescuentoPorEnvio";
const cantidadItems_input = document.querySelector("#cantidad-items");
const precioItems_input= document.querySelector("#precio-items");
const opcionesSelect = document.querySelector('#opciones');
const opcionesCategoria = document.querySelector('#categoria');
const opcionesPeso=document.querySelector('#pesoVolumetrico');
const opcionesCliente=document.querySelector("#tipoCliente");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = cantidadItems_input.value;
  const precio = precioItems_input.value;
  const estado = opcionesSelect.value;
  const categoria=opcionesCategoria.value;
  const peso=opcionesPeso.value;
  const cliente=opcionesCliente.value;
  if(cantidad == ""  && precio == "" )
  {
    alert("error");
  }
  var precioNeto = calcularPrecioNeto(cantidad, precio);//60
  const descuento=calcularDescuento(precioNeto);
  const precioConDescuento=precioNeto-descuento;


  var tipoProductoEscogido;
  if(categoria in categoriasProductos)
  {
    tipoProductoEscogido=categoriasProductos[categoria];
  }
  const descuentoSegunProducto=calcularDescuentosProductos(tipoProductoEscogido,precioConDescuento)
  var nuevoDescuento=precioConDescuento-descuentoSegunProducto;
  const costoSegunPeso=calcularPesoVolumetrico(cantidad,peso);
  const descuentoSegunTipoCliente=calcularDescuentosPorEnvio(cliente,costoSegunPeso);
  var precioTotalConDescuento=nuevoDescuento-descuentoSegunTipoCliente;//precio neto con descuento final
  const impuesto = calcularImpuesto(precioTotalConDescuento,estado);
  const impuestoSegunProducto=calcularImpuestosProductos(tipoProductoEscogido,precioTotalConDescuento);
  const precioConDescuentoEimpuestos=precioTotalConDescuento+impuesto+impuestoSegunProducto;
  console.log(precioConDescuentoEimpuestos);
  const precioTotal=calcularDescuentoFinal(precioNeto,cliente,categoria,precioConDescuentoEimpuestos);
  console.log(precioTotal);
  div.innerHTML = "<p>" + "Precio neto: " + precioNeto + "</p>";
  div.innerHTML += "<p>" + "Descuento: "+ descuento +"$"+ "</p>";
  div.innerHTML += "<p>" + "Impuesto para " + estado +":"+ impuesto +"$"+ "</p>";
  div.innerHTML += "<p>" + "Impuesto para la categoria "+ categoria + "(" + tipoProductoEscogido.Impuesto+ "%): " +impuestoSegunProducto+ "$"+"</p>";
  div.innerHTML += "<p>" + "Descuento para la categoria "+ categoria + "(" + tipoProductoEscogido.Descuento+ "%): " +descuentoSegunProducto+ "$"+"</p>";
  div.innerHTML += "<p>" + "Costo de envio segun el peso: "+costoSegunPeso+"$"+"</p>";
  div.innerHTML += "<p>" + "Descuento de envio segun el cliente: "+ descuentoSegunTipoCliente+"$"+"</p>";
  div.innerHTML += "<p>" + "Precio total (impuesto, descuento): "+ precioTotal +"$"+ "</p>";

});
