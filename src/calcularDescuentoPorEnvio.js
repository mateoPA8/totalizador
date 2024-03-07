import calcularPesoVolumetrico from "./calcularPesoVolumetrico";
function calcularDescuentosPorEnvio(cliente,costoSegunPeso)
{
    let clientesYdescuentos={
        "normal":0,
        "recurrente":0.5,
        "antiguoRecurrente":1,
        "especial":1.5
    }
    if(cliente in clientesYdescuentos)
    {
        return (clientesYdescuentos[cliente]*costoSegunPeso)/100;
    }
}
export default calcularDescuentosPorEnvio;