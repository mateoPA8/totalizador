import calcularPesoVolumetrico from "./calcularPesoVolumetrico";
function calcularDescuentosPorEnvio(cliente,peso,cantidad)
{
    if(cliente=="normal")
    {
        return 0*calcularPesoVolumetrico(cantidad,peso);
    }

}
export default calcularDescuentosPorEnvio;