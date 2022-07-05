import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RespuestaCuestionario, Resultado } from 'src/app/models/respuestasCuestionario';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  idCuestionario:number;
  loading = false;
  listRespuestaCuestionario: RespuestaCuestionario[] = [];
  Resultado: Resultado[] = [];

  Resultados: any[] = [];
  alumnos: any[] = [];

  constructor(private aRoute: ActivatedRoute,
              private toastr: ToastrService,
              private respuestaCuestionarioService: RespuestaCuestionarioService) {
                this.idCuestionario = +this.aRoute.snapshot.paramMap.get('id');
               }

  ngOnInit(): void {
    this.getListCuestionario();
  }

  getListCuestionario(): void{
    this.loading = true;
    console.log(this.idCuestionario)
    this.respuestaCuestionarioService.Respuestas(this.idCuestionario).subscribe(data => {
      this.Resultado = data;
      console.log(this.Resultado, 'TOTALES');

    })
    this.respuestaCuestionarioService.getListCuestionarioRespuesta(this.idCuestionario).subscribe(data =>{
      this.loading = false;
      this.listRespuestaCuestionario = data;

      this.listRespuestaCuestionario.forEach(elementi => this.Resultados.push(elementi.resultado));
        //  MAYOR QUE 80
          
          for( var i=0; i < this.Resultados.length; i++){
            if(this.Resultados[i] > 50){
              console.log(this.Resultados[i], 'Como imprimes tu?')
              this.alumnos.push(this.Resultados[i]);
              // console.log(this.alumnos.length, '***********')
            }
          }

          console.log(this.alumnos.length, '***********')
          console.log(this.Resultados.length, 'Total de Participantes');
      console.log(this.Resultados, 'Resultados')
      console.log( data, 'Que imprimes?');
    })
  }

  eliminarRespuestaCuestionario(idRtaCuestionario: number): void{
    this.loading = true;
    this.respuestaCuestionarioService.eliminarRespuestaCuestionario(idRtaCuestionario).subscribe(data =>{
      this.loading = false;
      this.toastr.error('La respuesta al cuestionario fue eliminada con exito', 'Registro eliminado!');
      this.getListCuestionario();
    }, errr => {
      this.loading = false;
      
    });
  }

}
