import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArmarCuestioanarioService } from 'src/app/services/armar-cuestionario.service';

@Component({
  selector: 'app-cuestionario-final',
  templateUrl: './cuestionario-final.component.html',
  styleUrls: ['./cuestionario-final.component.css']
})
export class CuestionarioFinalComponent implements OnInit {
  idCuestionario:  number;

  loading = false;
  cuestionario: any ={};
  constructor(private cuestionarioService: ArmarCuestioanarioService,
    private aRoute: ActivatedRoute) { 

      this.idCuestionario = +this.aRoute.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.getCuestionarios();
  }

  getCuestionarios(): void{

    this.loading= true;

    this.cuestionarioService.getCuestionario(this.idCuestionario).subscribe(data =>{
      this.loading= false;

      this.cuestionario= data;

      console.log(data);
    })
  }

}
