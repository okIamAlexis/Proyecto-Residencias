import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UsuarioEmp } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioEmpService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private http:HttpClient){
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/UsuarioEmp/';
  }

  
  // 'http://localhost:5045/api/Usuario  -- POST'
  seveUser(usuarioEmp: UsuarioEmp): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, usuarioEmp);

  }

  // changePassword(changePassword): Observable<any>{
  //   return this.http.put(this.myAppUrl + this.myApiUrl + '/CambiarPassword', changePassword);
  // }
}
