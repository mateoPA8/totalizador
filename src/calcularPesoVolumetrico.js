function calcularPesoVolumetrico(cantidad,peso)
{
    let pesosYenvios={
        "0-10":0,
        "11-20":3.5,
        "21-40":5,
        "41-80":6,
        "81-100":6.5,
        "101-200":8,
        ">200":9
    }
    if(peso in pesosYenvios)
   {
      return cantidad*pesosYenvios[peso];
   }
}
export default calcularPesoVolumetrico;