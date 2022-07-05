import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginEgrService } from '../services/login-egr.service';

@Injectable({
  providedIn: 'root'
})
export class AuthEgrGuard implements CanActivate {

  constructor(private router: Router,
    private loginEgrService: LoginEgrService){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      if(this.loginEgrService.getToken() == null){
        console.log('ruta protegida');
        this.router.navigate(['/inicion/login']);
      }

    return true;
  }
    
}
