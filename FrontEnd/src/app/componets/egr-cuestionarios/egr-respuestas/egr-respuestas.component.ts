import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuestionario } from 'src/app/models/cuestionario';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-egr-respuestas',
  templateUrl: './egr-respuestas.component.html',
  styleUrls: ['./egr-respuestas.component.css']
})
export class EgrRespuestasComponent implements OnInit {

  cuestionario: Cuestionario;
  respuestaUsuario: number []=[];


  constructor(private respuestaCuestionarioService: RespuestaCuestionarioService,
              private router: Router) { }

  ngOnInit(): void {
    if(this.respuestaCuestionarioService.idCuestionario == null){
      this.router.navigate(['/egr-cuestionarios/view-cuestionarios']);
    }else{
      this.cuestionario = this.respuestaCuestionarioService.cuestionario;
      this.respuestaUsuario = this.respuestaCuestionarioService.respuestas;
      console.log(this.cuestionario);
      console.log(this.respuestaUsuario);
    }
  }

  Salir(): void{
    this.router.navigate(['/egr-cuestionarios']);
  }

}
