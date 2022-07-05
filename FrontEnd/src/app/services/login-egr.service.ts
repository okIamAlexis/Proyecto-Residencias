import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioEgr } from '../models/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginEgrService {
  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/LoginEgr';
  }

  login(usuarioEgr: UsuarioEgr): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, usuarioEgr);
  }

  setLocalStorage(data): void{
    localStorage.setItem('tokenEgr', data);
  }

  removeLocalStorage(): void{
    localStorage.removeItem('tokenEgr');
  }

  getTokenDecoded(): any {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(localStorage.getItem('tokenEgr'));
    return decodedToken;
  }

  getToken(): string{
    return localStorage.getItem('tokenEgr')
  }
  
}
