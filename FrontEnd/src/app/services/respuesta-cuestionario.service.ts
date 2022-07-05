import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { ArmarCuesLista } from '../models/cuestionario';
import {ArmarCuesLista, Cuestionario} from '../models/cuestionario'
import { RespuestaCuestionario } from '../models/respuestasCuestionario';


@Injectable({
  providedIn: 'root'
})
export class RespuestaCuestionarioService {

  myAppUrl: string;
  myApiUrl: string;
  myApiiUrl: string;

  numControl: number;
  nombre: string;
  idCuestionario: number;
  respuestas: number[]=[];
  valor: number[]=[];
  // cuestionario: ArmarCuesLista;
  cuestionario: Cuestionario;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/RespuestaCuestionario/';
    this.myApiiUrl = '/api/Grafica/';
   }


   guardarRespuestaCuestionario(respuestaCuestionario: RespuestaCuestionario): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, respuestaCuestionario)
   }

    getListCuestionarioRespuesta(idCuestionario:number): Observable<any>{
     return this.http.get(this.myAppUrl + this.myApiUrl + idCuestionario);
   }

   eliminarRespuestaCuestionario(idRespuestaCuestionario: number): Observable<any>{
     return this.http.delete(this.myAppUrl + this.myApiUrl + idRespuestaCuestionario);
   }

   getCuestionarioByIdRespuesta(idRespuesta: number): Observable<any>{
     return this.http.get(this.myAppUrl + this.myApiUrl + 'GetCuestionarioByIdRespuesta/' + idRespuesta);
   }

   Respuestas(idCuestionario: number): Observable<any>{
     return this.http.get(this.myAppUrl + this.myApiiUrl + idCuestionario);
   }

}


