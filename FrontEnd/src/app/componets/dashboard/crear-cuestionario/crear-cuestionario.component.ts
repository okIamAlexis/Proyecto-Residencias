import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ArmarCuesLista } from 'src/app/models/cuestionario';
import { ArmarCuestioanarioService } from 'src/app/services/armar-cuestionario.service';


@Component({
  selector: 'app-crear-cuestionario',
  templateUrl: './crear-cuestionario.component.html',
  styleUrls: ['./crear-cuestionario.component.css']
})
export class CrearCuestionarioComponent implements OnInit {

  listCuestionarios: ArmarCuesLista[] = []
  loading = false;

  constructor(private cuestionarioFinalService: ArmarCuestioanarioService,
              private toastr: ToastrService) {  }

  ngOnInit(): void {
    
    this.getCuestionarios();
  }

  getCuestionarios(): void{
    this.loading= true;
    this.cuestionarioFinalService.getListCuestionario().subscribe(data =>{
      console.log(data);
      this.listCuestionarios = data;
      this.loading=false;

    }, error =>{
      console.log(error);

      this.loading=false;
      this.toastr.error('Opss.. ocurrio un error', 'Error');
    });
  }

  eliminarCuestionario(idCuestionarioFinal: number): void{

    if(confirm("Esta seguro que desea eliminar el cuestionario")){
      this.loading = true;
      this.cuestionarioFinalService.deleteCuestionario(idCuestionarioFinal).subscribe(data =>{
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





