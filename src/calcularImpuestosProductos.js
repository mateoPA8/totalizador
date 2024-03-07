function calcularImpuestosProductos(tipoProductoEscogido,precioTotalConDescuento)
{
    return (precioTotalConDescuento*tipoProductoEscogido.Impuesto)/100;
}
export default calcularImpuestosProductos;