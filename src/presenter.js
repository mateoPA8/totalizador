
import calcularPrecioNeto from "./calcularPrecioNeto";
import calcularImpuesto from "./calcularImpuesto";
import calcularDescuento from "./calcularDescuento";
import categoriasProductos from "./productos";
import calcularImpuestosProductos from "./calcularImpuestosProductos";
import calcularDescuentosProductos from "./calcularDescuentosProductos";
import calcularPesoVolumetrico from "./calcularPesoVolumetrico";
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
  if(cantidad !== ""  && precio !== "" )
  {
    var precioNeto = calcularPrecioNeto(cantidad, precio);//60
  }
  else
  {
    alert("error");
  }
  const descuento=calcularDescuento(precioNeto);
  const precioConDescuento=precioNeto-descuento;
  const impuesto = calcularImpuesto(precioConDescuento,estado);
  div.innerHTML = "<p>" + "Precio neto: " + precioNeto + "</p>";
  div.innerHTML += "<p>" + "Descuento: "+ descuento +"$"+ "</p>";
  div.innerHTML += "<p>" + "Impuesto para " + estado +":"+ impuesto +"$"+ "</p>";
  //let precioTotal=precioConDescuento+impuesto;//60+3.75=63.75

  
  div.innerHTML += "<p>" + "Precio total (impuesto, descuento): "+ precioTotal +"$"+ "</p>";
  let tipoProductoEscogido;
  console.log(categoria);
  if(categoria in categoriasProductos)
  {
    tipoProductoEscogido=categoriasProductos[categoria];
    console.log(tipoProductoEscogido);
    const descuentoSegunProducto=calcularDescuentosProductos(tipoProductoEscogido,precioConDescuento);//1.20
    var nuevoDescuento=precioConDescuento-descuentoSegunProducto;
    const impuestoSegunProducto=calcularImpuestosProductos(tipoProductoEscogido,precioNeto);
    div.innerHTML += "<p>" + "Impuesto para la categoria "+ categoria + "(" + tipoProductoEscogido.Impuesto+ "%): " +impuestoSegunProducto+ "$"+"</p>";
    div.innerHTML += "<p>" + "Descuento para la categoria "+ categoria + "(" + tipoProductoEscogido.Descuento+ "%): " +descuentoSegunProducto+ "$"+"</p>";
  }
  const costoSegunPeso=calcularPesoVolumetrico(cantidad,peso);
  div.innerHTML += "<p>" + "Costo de envio segun el peso: "+costoSegunPeso+"$"+"</p>";
  //const descuentoSegunTipoCliente=calcularDescuentosPorEnvio(cliente,peso,cantidad);
  const descuentoSegunTipoCliente=calcularDescuentosPorEnvio(cliente,costoSegunPeso);
  var nuevoDescuento2=nuevoDescuento-descuentoSegunTipoCliente;
  div.innerHTML += "<p>" + "Descuento de envio segun el cliente: "+ descuentoSegunTipoCliente+"$"+"</p>";
});
