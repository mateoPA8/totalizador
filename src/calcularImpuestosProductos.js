function calcularImpuestosProductos(tipoProductoEscogido,precioNeto)
{
    return (precioNeto*tipoProductoEscogido.Impuesto)/100;
}
export default calcularImpuestosProductos;