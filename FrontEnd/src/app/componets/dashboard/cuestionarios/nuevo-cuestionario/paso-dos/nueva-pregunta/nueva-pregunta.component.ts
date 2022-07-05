import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { Pregunta } from '../../../../../../models/pregunta';

@Component({
  selector: 'app-nueva-pregunta',
  templateUrl: './nueva-pregunta.component.html',
  styleUrls: ['./nueva-pregunta.component.css']
})
export class NuevaPreguntaComponent implements OnInit {

  nuevaPregunta: FormGroup;
  pregunta: Pregunta;
  rtaCorrecta = 0;
  @Output() enviarPregunta = new EventEmitter <Pregunta>();


  constructor(private fb: FormBuilder,
            
              private toastr: ToastrService) {
          
                this.nuevaPregunta = this.fb.group({

                  titulo: ['', Validators.required],
                  respuestas: this.fb.array([]),
                
                });

               }

  ngOnInit(): void {
    this.agregarRespuestasPorDefecto();
  }

  get getRespuestas(): FormArray{

    return this.nuevaPregunta.get('respuestas') as FormArray;
  }



  agregarRespuesta(): void{

    this.getRespuestas.push(this.fb.group({

      descripcion: ['', Validators.required],
      esCorrecta: 50
      
    }));
   }

    agregarRespuestasPorDefecto(): void{
      this.agregarRespuesta()
      this.agregarRespuesta()

    }

    eliminarRespuesta(index: number): void{
      if(this.getRespuestas.length === 2){
        this.toastr.error('Como minimo la pregunta debe tener 2 respuestas', 'Error');
      }else{
        this.getRespuestas.removeAt(index);
      }

    }

    // setRespuestaValida(index: number): void{
    //   this.rtaCorrecta = index;
    // }

    agregarPregunta(): void{
      //Obtenemos el titulo de la pregunta
      const descripcionPregunta = this.nuevaPregunta.get('titulo').value;

      //Obtenemos el array de respuestas
      const arrayRespuestas = this.nuevaPregunta.get('respuestas').value;

      //Creamos un array de respuestas
      const arrayRta: Respuesta[] = []


      arrayRespuestas.forEach((element) => {
        const respuesta: Respuesta = new Respuesta(element.descripcion, element.esCorrecta);
        // if(index === element.esCorrecta){
        //   respuesta.esCorrecta = true;
        // }
        arrayRta.push(respuesta);
      });

      const pregunta: Pregunta = new Pregunta(descripcionPregunta, arrayRta);

      this.enviarPregunta.emit(pregunta);
      console.log(pregunta);
      this.reset();
    }

    reset(): void{
      this.nuevaPregunta.reset();
      this.getRespuestas.clear();
      this.agregarRespuestasPorDefecto();
    

    }

     maxRespuestas(): void{
      if(this.getRespuestas.length >= 6){
         this.toastr.error('El maximo de respuestas es de 5', 'Error');
         
       }

     }
    


}
