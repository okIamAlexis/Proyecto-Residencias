export class Respuesta{
    id?: number;
    descripcion: string;
    esCorrecta: string;
    

    constructor(descriscion: string, esCorrecta: string,  id?: number){
        this.id = id;
        this.descripcion = descriscion;
        this.esCorrecta = esCorrecta;
       
    }
}


export class ArmarRespuesta{

    Id?: number;
    Descripcion: string;
    esCorrecta:string;

    // listRespuestas: ArmarRespuesta2[];

    hide?: boolean;
    // constructor( respuestas: ArmarRespuesta2[]){
    constructor( descripcion: string, esCorrecta: string){
        this.Descripcion  = descripcion;
        this.esCorrecta = esCorrecta;
        
        // this.listRespuestas = respuestas;
        this.hide = true;
        
        
    }
}

export class ArmarRespuesta2{

    // Id?: number;
    Descripcion: string;
    esCorrecta:string;

    // listRespuestas: ArmarRespuesta2[];

    hide?: boolean;
    // constructor( respuestas: ArmarRespuesta2[]){
    constructor( descripcion: string, esCorrecta: string){
        this.Descripcion  = descripcion;
        this.esCorrecta = esCorrecta;
        
        // this.listRespuestas = respuestas;
        this.hide = true;
        
        
    }
}

// export class ArmarRespuesta2{

//     Descripcion : string;
//     esCorrecta:string;

//     constructor(descripcion: string, esCorrecta: string){
        
//         this.Descripcion  = descripcion;
//         this.esCorrecta = esCorrecta;
        
        
//     }

// }

