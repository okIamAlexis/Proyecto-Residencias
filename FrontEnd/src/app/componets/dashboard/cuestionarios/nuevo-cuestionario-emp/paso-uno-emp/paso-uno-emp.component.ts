import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso-uno-emp',
  templateUrl: './paso-uno-emp.component.html',
  styleUrls: ['./paso-uno-emp.component.css']
})
export class PasoUnoEmpComponent implements OnInit {

  datosCuestionario: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) { 

      this.datosCuestionario = this.fb.group({
        titulo: ['', Validators.required],
        descripcion: ['', Validators.required]
      });
    }

  ngOnInit(): void {
  }

  // pasoUno(): void{
  //   this.cuestionarioService.tituloCues = this.datosCuestionario.value.titulo;
  //   this.cuestionarioService.descripcionCues = this.datosCuestionario.value.descripcion;
  //   this.router.navigate(['/dashboard/nuevoCuestionario/pasoDos']);
  // }

}
