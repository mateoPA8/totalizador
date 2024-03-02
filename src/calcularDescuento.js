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
   
}
export default calcularDescuento;