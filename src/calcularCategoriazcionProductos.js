function calcularCategorizacionProductos(tipoProductoEscogido,precioNeto)
{
    return (precioNeto*tipoProductoEscogido.Impuesto)/100;
}
export default calcularCategorizacionProductos;