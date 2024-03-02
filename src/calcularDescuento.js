function calcularDescuento(precioNeto)
{
    if (precioNeto<1000)
    {
        return 0;
    }
    if(precioNeto>=1000 && precioNeto<3000)
    {
        return (precioNeto*3)/100;
    }
    if(precioNeto>=3000 && precioNeto<7000)
    {
        return (precioNeto*5)/100;
    }
   
}
export default calcularDescuento;