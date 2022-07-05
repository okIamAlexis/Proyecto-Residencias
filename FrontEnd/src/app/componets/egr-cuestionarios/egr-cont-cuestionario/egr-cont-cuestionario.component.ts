import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ CuestionarioService } from '../../../services/cuestionario.service'
import { ArmarPregunta, Pregunta } from '../../../models/pregunta';
// import { ArmarCuestioanarioService } from '../../../services/armar-cuestionario.service';
import { RespuestaCuestionarioService } from '../../../services/respuesta-cuestionario.service';
import { ToastrService } from 'ngx-toastr';
import { Cuestionario } from '../../../models/cuestionario';
import { RespuestaCuestionarioDetalle } from 'src/app/models/respuestasCuestionarioDetalle';
import { RespuestaCuestionario } from 'src/app/models/respuestasCuestionario';


@Component({
  selector: 'app-egr-cont-cuestionario',
  templateUrl: './egr-cont-cuestionario.component.html',
  styleUrls: ['./egr-cont-cuestionario.component.css']
})
export class EgrContCuestionarioComponent implements OnInit {


  idCuestionario: number;
  listPreguntas: Pregunta[]=[];
  loading = false;
  rtaConfirmada = false;
  opcionSeleccionada: any;
  index = 0;

  idRespuestaSeleccionada: number;
  valorRespuesta: number;

  listCuestionarios: Cuestionario[]=[];

  listRespuestaDetalle: RespuestaCuestionarioDetalle[]=[];
  // listRespuestaDetalle: any[]=[];
  numPreguntas: number;

  resultado: number;

  datos: any=[];

  constructor(private respuestaCuestionarioService:  RespuestaCuestionarioService,
              // private valorRespuestaService: valorRespuestaService,
              private cuestionarioService: CuestionarioService,
              // private armarCuestionarioService: ArmarCuestioanarioService,
              private router: Router,
              private toastr: ToastrService,
            
             ) { }

  ngOnInit(): void {
    console.log(this.respuestaCuestionarioService.idCuestionario);
    console.log(this.respuestaCuestionarioService.numControl);
    console.log(this.respuestaCuestionarioService.nombre);

    this.idCuestionario = this.respuestaCuestionarioService.idCuestionario

    if(this.idCuestionario == null){
      this.router.navigate(['/egr-cuestionarios']);
      return
    }

    this.getCuestionario();

    this.respuestaCuestionarioService.respuestas = [];
  }

  getCuestionario(): void{

    this.loading = true;
    this.cuestionarioService.getCuestionario(this.idCuestionario).subscribe(data =>{
      // console.log(data.numPreguntas,'numero de preguntas');

      this.numPreguntas = data.numPreguntas;

      this.listPreguntas = data.listPreguntas;
      this.loading = false;
      this.respuestaCuestionarioService.cuestionario = data;

      console.log(this.respuestaCuestionarioService.cuestionario, 'IMPRIMO');
    });


  }

  obtenerPregunta(): string{
    return this.listPreguntas[this.index].descripcion;
  }

  getIndex(): number{
    return this.index;
  }

  respuestaSeleccionada(respuesta: any, idRespuesta: number, valorRespuesta: string): void{

    this.opcionSeleccionada = respuesta;
    this.rtaConfirmada = true;
    this.idRespuestaSeleccionada = idRespuesta;
    this.valorRespuesta = parseFloat(valorRespuesta);

  }


  AddClassOption(respuesta: any ): any {

    if (respuesta === this.opcionSeleccionada){
      return 'active text-ligth';
    }
  }

  siguiente(): void{

    this.respuestaCuestionarioService.respuestas.push(this.idRespuestaSeleccionada);
    this.respuestaCuestionarioService.valor.push(this.valorRespuesta);

    console.log(this.respuestaCuestionarioService.cuestionario.numPreguntas, 'Numero de preguntas')

    //Object RespuestaDetalle
    const detalleRespuesta: RespuestaCuestionarioDetalle = {
      respuestaId: this.idRespuestaSeleccionada,
      Valor: this.valorRespuesta
    };

    //Agregamos objeto al Array
    this.listRespuestaDetalle.push(detalleRespuesta);

    console.log(this.respuestaCuestionarioService.valor, 'yo soy el que necesitas');
    console.log(this.respuestaCuestionarioService.respuestas, 'yo tambien');

    this.idRespuestaSeleccionada = null;
    this.rtaConfirmada = false;
    this.valorRespuesta = null;

    console.log(this.valorRespuesta, 'imprimo')

    console.log(this.idRespuestaSeleccionada, 'Que imprimes?')
    this.index++;

    console.log(this.listRespuestaDetalle, 'Noo, yo soy el que necesitas!!')
    

    if(this.index === this.listPreguntas.length){


      //Resultado

      this.datos = this.respuestaCuestionarioService.valor;
      let suma = this.datos.reduce((anterior, actual) =>{
        return anterior + actual;
      })

      let div = suma/this.numPreguntas;
      console.log(div, 'Division Resultado');
      console.log(suma, 'Resultado')
      this.resultado = div;



      // this.cuestionarioService.deleteCuestionario(this.idCuestionario).subscribe(data =>{
      //   this.loading = false;
      //   this.toastr.success('El cuestionario fue contestado con exito','Registro guardado');
      //   this.getCuestionariosElimi();
      // }, error =>{
      //   this.loading= false;
      //   this.toastr.error('Opss.. ocurrio un error', 'Error');
      // });

      // this.router.navigate(['/egr-cuestionarios/egrRespuesta'])
      this.guardarRespuestaCuestionario();
      // .then(()=>{
      //   window.location.reload();

      // });
    }
  }

  guardarRespuestaCuestionario(): void {

    const rtaCuestionario: RespuestaCuestionario = {
      cuestionarioId: this.respuestaCuestionarioService.idCuestionario,
      num_ControlParticipante: this.respuestaCuestionarioService.numControl,
      nombreParticipante: this.respuestaCuestionarioService.nombre,
      resultado: this.resultado,
      ListRtaCustionarioDetalle: this.listRespuestaDetalle
      
    };
    console.log(rtaCuestionario)
    this.loading = true;
    this.respuestaCuestionarioService.guardarRespuestaCuestionario(rtaCuestionario).subscribe(data =>{
      this.loading= false;
      this.router.navigate(['/egr-cuestionarios/egrRespuesta'])
    }, error =>{
      this.loading = false;
      console.log(error);
    })
  }


  getCuestionariosElimi(): void{

    
    this.loading = true;

    this.cuestionarioService.getListCuestionarios().subscribe(data =>{


      console.log(data);

      this.listCuestionarios= data;

      this.loading=false;



    },error =>{
      console.log(error);

      this.loading= false;
      
  
      this.toastr.error('Opss.. ocurrio un error', 'Error');

      
    });
  }
}
