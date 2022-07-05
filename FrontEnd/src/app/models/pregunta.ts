import { Respuesta, ArmarRespuesta, ArmarRespuesta2 } from "./respuesta";

export class Pregunta{
    descripcion: string;
    listRespuesta: Respuesta[];
    hide?: boolean;

    constructor(descripcion: string, listRespuesta: Respuesta[]){
        this.descripcion = descripcion;
        this.listRespuesta = listRespuesta;
        this.hide = true;

    }
}


export class ArmarPregunta{

    Descripcion: string;

    listRespuestas: ArmarRespuesta[];
    hide?: boolean;

    constructor (descripcion: string, respuetas: ArmarRespuesta[]){

        this.Descripcion = descripcion;
        this.listRespuestas = respuetas;
       

        this.hide= true;
    }
}



export class ArmarPregunta22{

    Descripcion: string;

    listRespuestas: ArmarRespuesta[];
    hide?: boolean;

    constructor (descripcion: string, respuetas: ArmarRespuesta[]){

        this.Descripcion = descripcion;
        this.listRespuestas = respuetas;
       

        this.hide= true;
    }
}

// export class ArmarPregunta2{
//     Descripcion: string;

//     listRespuestas: ArmarRespuesta[];
    
//     hide?: boolean;

//     constructor (descripcion: string, respuetas: ArmarRespuesta[]){

//         this.Descripcion = descripcion;
//         this.listRespuestas = respuetas;
       

//         this.hide= true;
//     }

// }