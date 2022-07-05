import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginEgrService } from 'src/app/services/login-egr.service';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-egr-cuestionario',
  templateUrl: './egr-cuestionario.component.html',
  styleUrls: ['./egr-cuestionario.component.css']
})
export class EgrCuestionarioComponent implements OnInit {


  nombre: string;
  numControl: string;
  aPaterno: string;
  aMaterno: string;
  Nombre_Completo: string;

  idUsuario = 1;
  constructor(private roueter: Router,
              private loginEgrService: LoginEgrService,
              private respuestaCuestionario: RespuestaCuestionarioService) { }

  ngOnInit(): void {
  }

  siguiente():void{

    this.numControl=  this.loginEgrService.getTokenDecoded().sub;
    this.nombre =  this.loginEgrService.getTokenDecoded().nombre;
    this.aPaterno =  this.loginEgrService.getTokenDecoded().a_paterno;
    this.aMaterno =  this.loginEgrService.getTokenDecoded().a_materno;

    this.Nombre_Completo = this.nombre + ' ' + this.aPaterno+ ' ' + this.aMaterno;

    console.log(this.Nombre_Completo);


    this.respuestaCuestionario.numControl = parseInt(this.numControl);
    this.respuestaCuestionario.nombre = this.Nombre_Completo;
    this.roueter.navigate(['/egr-cuestionarios/view-cuestionarios'])
  }

}
