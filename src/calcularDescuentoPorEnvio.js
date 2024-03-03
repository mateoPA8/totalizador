import calcularPesoVolumetrico from "./calcularPesoVolumetrico";
function calcularDescuentosPorEnvio(cliente,peso,cantidad)
{
    if(cliente=="normal")
    {
        return 0*calcularPesoVolumetrico(cantidad,peso);
    }
    if(cliente=="recurrente")
    {
        return (0.5*calcularPesoVolumetrico(cantidad,peso))/100;
    }
    if(cliente=="antiguoRecurrente")
    {
        return (1*calcularPesoVolumetrico(cantidad,peso))/100;
    }
    if(cliente=="especial")
    {
        return (1.5*calcularPesoVolumetrico(cantidad,peso))/100;
    }
}
export default calcularDescuentosPorEnvio;