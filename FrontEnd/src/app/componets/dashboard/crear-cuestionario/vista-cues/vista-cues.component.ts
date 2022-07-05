import { Component, OnInit } from '@angular/core';
import { ArmarCuestioanarioService } from '../../../../services/armar-cuestionario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ArmarCuesLista } from 'src/app/models/cuestionario';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-cues',
  templateUrl: './vista-cues.component.html',
  styleUrls: ['./vista-cues.component.css']
})
export class VistaCuesComponent implements OnInit {

  datosCuestionario: FormGroup;
  
  // idCuestionario:  number;

  // loading = false;
  // cuestionario: any ={};

  // nombreUsuario: string;
  // tipocuestionario: FormGroup;

  // listCuestionarios: ArmarCuesLista[]=[];
  // loading = false;

  constructor(
    // private armarCuestionarioService: ArmarCuestioanarioService,
              private fb: FormBuilder,
              private router : Router,
              // private loginService: LoginService,
              // private toastr: ToastrService
              ) { 

                this.datosCuestionario = this.fb.group({

                  identificador:['', Validators.required],
                 

                });
              }

  ngOnInit(): void {
  }


  pasoUno(): void{

    // this.armarCuestionarioService.identificadorCuestionario = this.datosCuestionario.value.identificador;
    this.router.navigate(['/dashboard/cuesFinal']);
    // console.log(this.armarCuestionarioService.identificadorCuestionario);
  }

  // getNombreUsuario(): void{
  //   console.log(this.loginService.getTokenDecoded);
  //   this.nombreUsuario =  this.loginService.getTokenDecoded().sub;
  // }


  // getCuestionarios(): void{

  //   this.loading= true;
  //   this.armarCuestionarioService.getListCuestionario().subscribe(data =>{

  //     console.log(data);
  //     this.listCuestionarios= data;
  //     this.loading=false;

  //   },error =>{

  //     console.log(error);
  //     this.loading=false;
  //     this.toastr.error('Opss.. ocurrio un error', 'Error');
  //   });
  // }

}
