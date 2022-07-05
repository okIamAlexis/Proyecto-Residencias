import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CuestionarioService } from '../../../../services/cuestionario.service';
import { Cuestionario, ArmarCuesLista, armarcuestionario } from 'src/app/models/cuestionario';
import { ToastrService } from 'ngx-toastr';
import { Pregunta, ArmarPregunta,  ArmarPregunta22 } from 'src/app/models/pregunta';
import { FormGroup, FormArray} from '@angular/forms';
import {ArmarRespuesta, ArmarRespuesta2, Respuesta} from 'src/app/models/respuesta';
import { ArmarCuestioanarioService } from 'src/app/services/armar-cuestionario.service';

@Component({
  selector: 'app-cues-final',
  templateUrl: './cues-final.component.html',
  styleUrls: ['./cues-final.component.css']
})
export class CuesFinalComponent implements OnInit {


  listCuestionarios: Cuestionario[]=[];
  listPreguntas: Pregunta[]=[];
  listaRespuesta: Respuesta[]=[];
  listCuestioanrios: Cuestionario[]=[];
  ListCuestionario: armarcuestionario[]=[];
  

  loading = false;
  show = false;
  rtaConfirm = false;

  ListaCuesPorId: any ={};
  listaCuesti: any ={};
  idPreguntasSeleccionadas: any={};
  preguntasrandom2:  any={};
  preguntasrandom3:  any={};
  listaCuesnew:  any={};
  listaCuesnew2: any={};
  cuesservice:any={};
  Res: any={};

  index = 0;

  idCuestionario : number;
  numerodepreguntas: number;
  lista:number[]=[1,2,3,4];
  selected: number= 1;

  ////////////datos para guardar el cuestionario//

  armartituloCuestionario: string;
  armardescripcionCuestionario: string;
  armaratributoCuestionario: string;
  identifcador: string;


  NuevoCuestionario: FormGroup;


  nose: any={};
nose2: any=[];
nose3: any={};
nose4: any={};

  constructor(
              private cuestionarioService: CuestionarioService, 
              private toastr: ToastrService,
              private aRoute: ActivatedRoute,
              private router: Router,
              private armarCuestionarioService: ArmarCuestioanarioService) {

              this.idCuestionario = +this.aRoute.snapshot.paramMap.get('id'); 

              // this.selected = this.fb.group({
              //     preguntas: ['']
              // });

              }

  ngOnInit(): void {
    this.getCuestionarios();
    // console.log(this.identifcador);
  }

get ListadePreguntas (): FormArray{
  return this.NuevoCuestionario.get('listadoPreguntas') as FormArray;
}


  getCuestionarios(): void{
    this.cuestionarioService.getListCuestionarioByuser().subscribe(data =>{

      console.log(data , 'byUser');
      this.listCuestionarios= data;
      this.listCuestioanrios = this.listCuestionarios;

    },error =>{
      console.log(error);
      
      this.loading=false;
      this.toastr.error('Opss.. ocurrio un error', 'Error');
    });
  }

////////PARA ITERAR POR ID DEL CUESTIONARIO
  getCuestioList(): void{

    this.cuestionarioService.getListCuestionarioByuser().subscribe(data =>{
      this.listCuestionarios= data;
      this.listaCuesti = this.listCuestionarios;
      console.log(this.listaCuesti , 'LISTA?');

      this.loading=false;

    },error =>{
      console.log(error);
      
      this.loading=false;
      this.toastr.error('Opss.. ocurrio un error', 'Error');
    });

  }
  
  toggleShow(){
    this.show = !this.show;
  }
  

  obtenerCuestioanrioNombre(): string {
    return this.listCuestioanrios[this.index].nombre;
  }

  obtenerCuestioanrioAtributo(): String {
    return this.listCuestioanrios[this.index].atributo;
  }

  obtenerCuestioanrionumpreguntas(): number {
    return this.listCuestioanrios[this.index].numPreguntas;
  }


  getIndex():number{
    return this.index;
  }

  siguiente(): void{

    this.rtaConfirm = false;
    this.index++;

    if(this.index){
      this.show = !this.show;
    }
  }

  finalizarcues():void{

    if (this.index === this.listaCuesti.length){ 
    }
  }

  getListaCuesPorId(): void{
      
    this.idCuestionario = this.listCuestioanrios[this.index].id;
    this.cuestionarioService.getCuestionario(this.idCuestionario).subscribe(data=>{

      this.ListaCuesPorId = data;
      console.log(this.ListaCuesPorId, 'Cuestionario');

      this.armartituloCuestionario = this.ListaCuesPorId.nombre;
      this.armaratributoCuestionario = this.ListaCuesPorId.atributo;
      this.armardescripcionCuestionario = this.ListaCuesPorId.descripcion;

      // this.ListaCuesPorId.nombre
      // this.ListaCuesPorId.listRespuesta;
      // console.log(this.ListaCuesPorId.listRespuesta, 'Pruebaaa2')

      this.listPreguntas = this.ListaCuesPorId      
      this.idPreguntasSeleccionadas = this.listPreguntas;

     ////Aqui jalamos el valor del select y se los setiamos a numerodepreguntas
      // this.numerodepreguntas = this.selected.value.preguntas;
      this.numerodepreguntas = this.selected;
      console.log(this.numerodepreguntas, 'numero de preguntas seleccionadas');

      /////RANDOM

      // const arrayResp = this.idPreguntasSeleccionadas.listPreguntas;
      // const arrayRespuestas: ArmarRespuesta[] = [];

      // arrayResp.forEach(element=>{
      //   const respuesta: ArmarRespuesta = new ArmarRespuesta(element.descripcion, element.esCorrecta);
      //   arrayRespuestas.push(respuesta);
      // })


      this.preguntasrandom2 = this.idPreguntasSeleccionadas.listPreguntas;
      console.log(this.preguntasrandom2, 'para saber numero de preguntas')
      this.preguntasrandom3 = this.preguntasrandom2;

      this.preguntasrandom3.sort(function(){

        return Math.random() - 0.5
        
      }  );

      this.preguntasrandom3.length = this.numerodepreguntas;

      // for(var i=0; i< this.preguntasrandom3.length; i++){
      //     console.log(this.preguntasrandom3[i].listRespuestas, 'A verque pasa');
      //   }
      console.log(this.preguntasrandom3, 'seleccionadas por el usuario con random');
      // this.listaRespuesta = this.preguntasrandom3;
  
    const arrayPreguntas = this.preguntasrandom3;
      console.log(arrayPreguntas, 'ABCD')

    // const arrayRespuestaa = this.RespuestasRandom;
    const arrayPreg: ArmarPregunta[]=[];
    const titulo = this.ListaCuesPorId.nombre
    const fecha = this.ListaCuesPorId.fechaCreacion
    const descripcion =  this.ListaCuesPorId.descripcion
    const atributo = this.ListaCuesPorId.atributo

    const arrayPreg2:  ArmarRespuesta2[]=[];
    const arrayPreg22: ArmarPregunta22[]=[];

      const arrayRespuestas: ArmarRespuesta[] = [];
      // const arrayPreg2: ArmarRespuesta2[] = [];
      // const desRespuestas= this.Res;

      arrayPreguntas.forEach(element => {
        const pregunta: ArmarPregunta = new ArmarPregunta(element.descripcion,element.listRespuesta);
        arrayPreg.push();
        //this.arregloFel = ArmarPregunta;
        console.log(pregunta.listRespuestas, 'Que imprime?')
        // console.log(pregunta.Descripcion, 'La Descripcion')

        this.nose = pregunta.listRespuestas;

        // this.nose = arrayPreg[listRespuestas]

        console.log( this.nose, 'QUE TIENE?')



        this.nose.forEach(element =>{

          const pregunta2: ArmarRespuesta2 = new ArmarRespuesta2 ( element.descripcion, element.esCorrecta)
          arrayPreg2.push(pregunta2);
          console.log(arrayPreg2, 'QUE PASA??')


          this.nose2.push(pregunta2);


          console.log(this.nose2, '1234567890')


        })

        this.nose4=arrayPreg2;

          const pregunta22:  ArmarPregunta22 = new  ArmarPregunta22( element.descripcion, this.nose4 )

          arrayPreg22.push(pregunta22)


          console.log(pregunta22, 'EL FIN')
        
        
      });

      const cuestioanario: armarcuestionario = new armarcuestionario( titulo,descripcion,atributo,fecha, arrayPreg22);
      
      
    // this.arregloFel = cuestioanario;


      //const ListaArmadoCuestionario: ArmarCuesLista = new ArmarCuesLista(  this.arregloFel)

      //this.ListaCu.push(ListaArmadoCuestionario);
 
      this.ListCuestionario.push(cuestioanario);




      // id?: number;
      // identificador: string;
      // fechaCreacion?: Date;
      // listCuestionarioArmados: armarcuestionario[];

      console.log(cuestioanario, 'ALEXISSSSSSSSSS')

     // console.log(ListaArmadoCuestionario, 'NO SE QUE BA SUCEDER UN MILAGRO?')


//////////////////////////////////////////////////////////////////
    
// this.listaCuesnew = ListaArmadoCuestionario;

this.listaCuesnew = cuestioanario;
this.armarCuestionarioService.Cuestionarios.push(this.listaCuesnew);


   
      
    });
  }



  guardarCuestionarios(): void{
  
    this.identifcador = "ISC-002";
    // this.identifcador = this.armarCuestionarioService.identificadorCuestionario;
    this.cuesservice = this.armarCuestionarioService.Cuestionarios;
   
    const publicarcues: ArmarCuesLista={
      descripcion: this.identifcador,
      listCuestionarios: this.cuesservice
     }
  
     console.log(publicarcues, 'MILAGROS');

     //Para enviar al backend

     this. armarCuestionarioService.guardarCuestionaroArmado(publicarcues).subscribe(data=>{
       this.toastr.success('El cuestionario final fue registrado con exito' , 'Cuestionario Registrado!');
       this.router.navigate(['/dashboard']);
       this.loading = false;
       

     },error=>{
      this.toastr.error('Opps ocurrio un error!', 'Error');
      this.router.navigate(['/dashboard']);
      this.loading = false;
     });
    
  }

  reset(): void{
    // this.getListaCuesPorId.reset();
    this.listaCuesnew.reset();
    window.location.reload();
  }

}

