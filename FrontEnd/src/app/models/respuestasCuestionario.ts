import { RespuestaCuestionarioDetalle } from "./respuestasCuestionarioDetalle";
import { Resultados } from "./Resultados";



export class RespuestaCuestionario{
    id?;
    cuestionarioId: number;
    num_ControlParticipante;
    nombreParticipante;
    fecha?: Date;
    resultado: number;

    ListRtaCustionarioDetalle: RespuestaCuestionarioDetalle[];

}


export class Resultado{
    
    resultado: number;

    // constructor(cuestionarioId: number, resultado: number){

    //     cuestionarioId = cuestionarioId;
    //     resultado = resultado;

    // }
}