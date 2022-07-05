import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ArmarCuesLista } from '../models/cuestionario';
import { armarcuestionario } from '../models/cuestionario';
import { Cuestionario } from '../models/cuestionario';

@Injectable({
  providedIn: 'root'
})
export class ArmarCuestioanarioService {

  listaBancoCuestionarios: number[]=[];
  listRespuestas: number[]=[];

  Cuestionarios: number[]=[];
  
  // identificadorCuestionario: string;

  myAppUrl: String;
  myApiUrl: string;
 


  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/CuestionarioFinal/';

   
   }


  guardarCuestionaroArmado(publicarcues: ArmarCuesLista): Observable<any>{

    return this.http.post(this.myAppUrl + this.myApiUrl, publicarcues );

  }

  getListCuestionario(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + 'GetListCuestionarioFinalByUser');
  }

  deleteCuestionario(idCuestionarioFinal: number): Observable<any>{

    return this.http.delete(this.myAppUrl + this.myApiUrl + idCuestionarioFinal);
  }

 getCuestionario(idCuestionarioFinal: number): Observable<any>{

    return this.http.get(this.myAppUrl + this.myApiUrl + idCuestionarioFinal);
  }


 getListCuestionarios(): Observable<any>{

    return this.http.get(this.myAppUrl + this.myApiUrl + 'GetAllListCuestioarios');
  }

}