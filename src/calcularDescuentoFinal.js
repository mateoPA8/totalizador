function calcularDescuentoFinal(precioNeto,cliente,tipoProductoEscogido)
{
    if(precioNeto>3000 && cliente=="antiguoRecurrente" && tipoProductoEscogido=="Alimentos")
    {
        return precioNeto-100;
    }
}
export default calcularDescuentoFinal;