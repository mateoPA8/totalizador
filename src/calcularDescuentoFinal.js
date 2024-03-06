function calcularDescuentoFinal(precioNeto,cliente,tipoProductoEscogido)
{
    if(precioNeto>3000 && cliente=="antiguoRecurrente" && tipoProductoEscogido=="Alimentos")
    {
        return precioNeto-100;
    }
    if(precioNeto>7000 && cliente=="especial" && tipoProductoEscogido=="Electronicos")
    {
        return precioNeto-200;
    }
}
export default calcularDescuentoFinal;