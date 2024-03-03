function calcularDescuentosProductos(tipoProductoEscogido,precioNeto)
{
   return (precioNeto*tipoProductoEscogido.Descuento)/100;
}
export default calcularDescuentosProductos;