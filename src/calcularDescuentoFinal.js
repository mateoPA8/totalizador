function calcularDescuentoFinal(precioNeto,cliente,categoria,precioConDescuentoEimpuestos)
{
    
    if(precioNeto>3000 && cliente=="recurrente" && categoria=="Alimentos")
    {
        return precioConDescuentoEimpuestos-100;
    }
    if(precioNeto>7000 && cliente=="especial" && categoria=="Electronicos")
    {
        return precioConDescuentoEimpuestos-200;
    }
    return 0;
}
export default calcularDescuentoFinal;