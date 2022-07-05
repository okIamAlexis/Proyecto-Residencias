import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class AddTokenEgrInterceptor implements HttpInterceptor {

  constructor(private router: Router, private tostr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    const tokenEgr = localStorage.getItem('tokenEgr');
  

    if(tokenEgr){
      request = request.clone({ setHeaders: { Authorization: `Bearer ${tokenEgr}`} });
    }

    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse) =>{
        if(error.status === 401){
          this.tostr.error('Sesion expirada, por favor vuelva a iniciar sesión');
          this.router.navigate(['/inicio/login']);
        }
        return throwError(error);
      })
    );
      
      

    
  }
   
  
}
