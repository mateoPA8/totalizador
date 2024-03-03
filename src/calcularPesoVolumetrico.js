function calcularPesoVolumetrico(cantidad,peso)
{
    if(peso=="0-10")
    {
        return cantidad*0;
    }
    if(peso=="11-20")
    {
        return cantidad*3.5;
    }
    if(peso=="21-40")
    {
        return cantidad*5;
    }
    if(peso=="41-80")
    {
        return cantidad*6;
    }
}
export default calcularPesoVolumetrico;