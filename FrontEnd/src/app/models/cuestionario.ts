

import { Pregunta, ArmarPregunta } from "./pregunta";

export class Cuestionario{
    id?: number;
    
    nombre:string;
    descripcion: string;
    fechaCreacion?: Date;
    listPreguntas: Pregunta[];
    atributo: String;
    numPreguntas?: number;   

    constructor(nombre: string,descripcion: string, fechaCreacion: Date,  atributo: string, listPreguntas: Pregunta[]){
        this.nombre = nombre;
        this.atributo = atributo;
        this.descripcion =descripcion;
        this.fechaCreacion = fechaCreacion;
        this.listPreguntas = listPreguntas;

        
    }


}



export class ArmarCuesLista{

    id?: number;
    descripcion: string;
    fechaCreacion?: Date;
    listCuestionarios: armarcuestionario[];
    
    constructor (identificador: string, fechaCreacion: Date, listaCuestionarioArmado: armarcuestionario[]){

        this.descripcion= identificador;
        this.fechaCreacion = fechaCreacion;

        this.listCuestionarios= listaCuestionarioArmado;

    }
}





export class armarcuestionario{


    //listCuestionario: Cuestionario[];

    //idSeleccionado?: number;
    Nombre: string;
    Descripcion: string;
    FechaCreacion?: Date;
    listPreguntas: ArmarPregunta[];
    Atributo: string;

    numPreguntas?: number;

    constructor(nombre: string, descripcion: string, atributo: string, fechaCreacion: Date, listPreguntas: ArmarPregunta[] ) {

        this.Nombre= nombre;
        this.Descripcion= descripcion;
        this.Atributo = atributo;
        this.FechaCreacion = fechaCreacion;
        this.listPreguntas = listPreguntas;
        
    }


}