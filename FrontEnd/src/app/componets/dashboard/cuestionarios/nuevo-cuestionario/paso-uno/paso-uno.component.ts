import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CuestionarioService } from '../../../../../services/cuestionario.service';

@Component({
  selector: 'app-paso-uno',
  templateUrl: './paso-uno.component.html',
  styleUrls: ['./paso-uno.component.css']
})
export class PasoUnoComponent implements OnInit {

datosCuestionario: FormGroup;
atributo: string[]=["Atributo 1","Atributo 2","Atributo 3","Atributo 4","Atributo 5","Atributo 6","Atributo 7"];
selected :string ='Atributo 1';

  constructor( private fb: FormBuilder,
               private router : Router,
               private cuestionarioService: CuestionarioService) {

                this.datosCuestionario = this.fb.group({

                  titulo:['', Validators.required],
                  descripcion:['', Validators.required],
                  miselect:['']

                });

                }

  ngOnInit(): void {
  }

  pasoUno(): void{

    this.cuestionarioService.tituloCuestionario = this.datosCuestionario.value.titulo;
    this.cuestionarioService.descripcionCuestionario = this.datosCuestionario.value.descripcion;
    this.cuestionarioService.atributoCuestionario = this.datosCuestionario.value.miselect;

    this.router.navigate(['/dashboard/nuevoCuestionario/pasoDos']);
  }

}
