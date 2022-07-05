import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';
import { ArmarCuesLista, Cuestionario } from '../../../models/cuestionario';
import { ArmarCuestioanarioService } from '../../../services/armar-cuestionario.service';
// import { RespuestaCuestionarioService } from '../../../services/respuesta-cuestionario.service';
import {CuestionarioService} from '../../../services/cuestionario.service'


@Component({
  selector: 'app-view-cuestionaarios-egr',
  templateUrl: './view-cuestionaarios-egr.component.html',
  styleUrls: ['./view-cuestionaarios-egr.component.css']
})
export class ViewCuestionaariosEgrComponent implements OnInit {

  loading = false;
  // listCuestionarios: ArmarCuesLista[] = [];
  listCuestionarios: Cuestionario[]=[];

  idUsuario = 1;

  constructor( private cuestionarioFinalService: CuestionarioService,
              // private cuestionarioFinalService: ArmarCuestioanarioService,
              private router: Router,
              private respuestaCuestionario: RespuestaCuestionarioService
              

              
              ) { }

  ngOnInit(): void {
    this.getCuestionarios();
  }

  getCuestionarios(): void{
    this.loading= true;
    this.cuestionarioFinalService.getListCuestionarios().subscribe(data =>{
      console.log(data);
      this.listCuestionarios = data;
      this.loading=false;

    }, error =>{
      console.log(error);

      this.loading=false;
      // this.toastr.error('Opss.. ocurrio un error', 'Error');
    });
  } 

  ContestarCues(idCuestionario: number): void{

    this.respuestaCuestionario.idCuestionario = idCuestionario;
    
    this.router.navigate(['/egr-cuestionarios/egr-cont-cuestionario']);

  }



   // ContestarCues(idCuestionario: number): void{

  //   this.respuestaCuestionario.idCuestionario = idCuestionario;
  //   this.respuestaCuestionario.idUsuario = this.idUsuario;
  //   this.router.navigate(['/egr-cuestionarios/egr-cont-cuestionario']);

  // }

}