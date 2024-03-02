
function calcularImpuesto(precioNeto,estado)
{
   if(estado=="CA")
   {
      return (precioNeto*8.25)/100;
   }
   if(estado=="NV")
   {
      return (precioNeto*8.00)/100;
   }
   if(estado=="UT")
   {
      return (precioNeto*6.65)/100;
   }

}

export default calcularImpuesto;