
function calcularImpuesto(precioTotalConDescuento,estado)
{
   let tasasImpuestos={
      "CA":8.25,
      "NV":8.00,
      "UT":6.65,
      "TX":6.25,
      "AL":4.00
   }
   if(estado in tasasImpuestos)
   {
      return (precioTotalConDescuento*tasasImpuestos[estado])/100;
   }
      
}

export default calcularImpuesto;