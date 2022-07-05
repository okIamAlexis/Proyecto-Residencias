import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cuestionario } from '../models/cuestionario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  tituloCuestionario: string;
  descripcionCuestionario: string;
  atributoCuestionario: string;

  myAppUrl: String;
  myApiUrl: string;


  constructor( private http: HttpClient) { 

    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Cuestionario/';
  }


   guardarCuestionario(cuestionario: Cuestionario): Observable<any> {

      return this.http.post(this.myAppUrl +  this.myApiUrl, cuestionario);
   }

   getListCuestionarioByuser(): Observable<any>{
     
      return this.http.get(this.myAppUrl + this.myApiUrl + 'GetListCuestionarioByUser');
   }
   

   deleteCuestionario(idCuestionario: number): Observable<any>{

      return this.http.delete(this.myAppUrl + this.myApiUrl + idCuestionario);
   }

   getCuestionario(idCuestionario: number): Observable<any>{

      return this.http.get(this.myAppUrl + this.myApiUrl + idCuestionario);
   }


   getListCuestionarios(): Observable<any>{

      return this.http.get(this.myAppUrl + this.myApiUrl + 'GetListCuestionarios');
   }

   // AllCuestionarios(): Observable<any>{
   //    return this.http.get(this.myAppUrl+ this.myApiUrl + 'AllCuestionarios');
   // }

   


}
