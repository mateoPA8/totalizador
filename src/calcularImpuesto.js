
function calcularImpuesto(precioNeto,estado)
{
   if(estado=="CA")
   {
      return (precioNeto*8.25)/100;
   }
}

export default calcularImpuesto;