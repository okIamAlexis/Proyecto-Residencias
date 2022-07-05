import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UsuarioEgr } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioEgrService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private http:HttpClient){
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/UsuarioEgr/';
  }

  
  // 'http://localhost:5045/api/Usuario  -- POST'
  seveUser(usuarioEgr: UsuarioEgr): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, usuarioEgr);

  }

  // changePassword(changePassword): Observable<any>{
  //   return this.http.put(this.myAppUrl + this.myApiUrl + '/CambiarPassword', changePassword);
  // }
}
