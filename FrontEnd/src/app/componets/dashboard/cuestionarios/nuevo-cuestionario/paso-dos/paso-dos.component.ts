import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cons } from 'rxjs';
import { Cuestionario } from '../../../../../models/cuestionario';
import { Pregunta } from '../../../../../models/pregunta';
import { CuestionarioService } from '../../../../../services/cuestionario.service';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.css']
})
export class PasoDosComponent implements OnInit {

  tituloCuestionario: string;
  descripcionCuestionario: string;
  atributoCuestionario: string;
  loading = false;
  
  listPreguntas: Pregunta[]=[];

 
  
  
  constructor(  
                private toastr: ToastrService,
                private router: Router,
                private cuestionarioService: CuestionarioService
               ) { }

  ngOnInit(): void {

    this.tituloCuestionario = this.cuestionarioService.tituloCuestionario;
    this.descripcionCuestionario = this.cuestionarioService.descripcionCuestionario;
    this.atributoCuestionario = this.cuestionarioService.atributoCuestionario;
    


  }

  guardarPregunta(pregunta: Pregunta): void{

    this.listPreguntas.push(pregunta);
    
  }


  eliminarPregunta(index: number): void{

    this.listPreguntas.splice(index,1);
  }

  guardarCuestionario(): void{

    const cuestionario: Cuestionario = {

      nombre: this.tituloCuestionario,
      descripcion: this.descripcionCuestionario,
      atributo: this.atributoCuestionario,
      listPreguntas: this.listPreguntas
      

    };

    this.loading = true;
    ///Enviamos cuestionario al backend

    this.cuestionarioService.guardarCuestionario(cuestionario).subscribe(data =>{
      this.toastr.success('El cuestionario fue registrado con exito', 'Cuestio Registrado');
      this.router.navigate(['/dashboard']);
      this.loading = false;
    }, error =>{
     this.toastr.error('Opps ocurrio un error!', 'Error');
     this.router.navigate(['/dashboard']);
     this.loading = false;
    });


  }
}