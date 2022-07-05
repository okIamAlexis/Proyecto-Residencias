import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioEmp } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginEmpService {
  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/LoginEmp';
  }

  login(usuarioEmp: UsuarioEmp): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, usuarioEmp);
  }

  setLocalStorage(data): void{
    localStorage.setItem('tokenEmp', data);
  }

  getNombreUsuario(): string{
    return localStorage.getItem('EmpUsuario');
  }

  removeLocalStorage(): void{
    localStorage.removeItem('tokenEmp');
  }
}
