import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cuestionario } from 'src/app/models/cuestionario';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cuestionarios',
  templateUrl: './cuestionarios.component.html',
  styleUrls: ['./cuestionarios.component.css']
})
export class CuestionariosComponent implements OnInit {

  nombreUsuario: string;
  tipocuestionario: FormGroup;

  listCuestionarios: Cuestionario[]=[];
  loading = false;

  constructor(private loginService: LoginService,
              private fb: FormBuilder,
              private cuestionarioService: CuestionarioService,
              private toastr: ToastrService) { 

                this.tipocuestionario = this.fb.group({
                  cuestionario: ['', Validators.required] 
                });
  }

  ngOnInit(): void {
    this.getNombreUsuario();
    this.getCuestionarios();
    console.log(this.loginService.getTokenDecoded);
  }

  getNombreUsuario(): void{
    console.log(this.loginService.getTokenDecoded);
    this.nombreUsuario =  this.loginService.getTokenDecoded().sub;
  }

  getCuestionarios(): void{

    this.loading= true;
    this.cuestionarioService.getListCuestionarioByuser().subscribe(data =>{

      console.log(data, 'data1');

      this.listCuestionarios= data;
      this.loading=false;

    },error =>{
      console.log(error);
      
      this.loading=false;
      // this.toastr.error('Opss.. ocurrio un error', 'Error');
    });
  }

  eliminarCuestionario(idCuestionario: number): void{

    if(confirm("Esta seguro que desea eliminar el cuestionario")){

      this.loading = true;

      this.cuestionarioService.deleteCuestionario(idCuestionario).subscribe(data =>{

        this.loading = false;

        this.toastr.success('El cuestionario fue eliminado con exito','Registro eliminado');

        this.getCuestionarios();
      }, error =>{
        this.loading= false;
        this.toastr.error('Opss.. ocurrio un error', 'Error');
      });
    }
  }
  

}
