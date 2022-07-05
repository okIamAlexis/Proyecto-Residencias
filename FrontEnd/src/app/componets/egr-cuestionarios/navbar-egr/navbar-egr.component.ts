import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginEgrService } from 'src/app/services/login-egr.service';

@Component({
  selector: 'app-navbar-egr',
  templateUrl: './navbar-egr.component.html',
  styleUrls: ['./navbar-egr.component.css']
})
export class NavbarEgrComponent implements OnInit {

  nombre: string;
  numControl: string;
  aPaterno: string;
  aMaterno: string;

  Nombre_Completo: string;

  constructor(private loginEgrService: LoginEgrService,
              private router: Router) { }

  ngOnInit(): void {
    this.getNumControl();
    // this.getNombre();
    // this.getApaterno();
    // this.getAmaterno();
    console.log(this.loginEgrService.getTokenDecoded());
  }

  getNumControl(): void{
   
    this.numControl=  this.loginEgrService.getTokenDecoded().sub;
    this.nombre =  this.loginEgrService.getTokenDecoded().nombre;
    this.aPaterno =  this.loginEgrService.getTokenDecoded().a_paterno;
    this.aMaterno =  this.loginEgrService.getTokenDecoded().a_materno;

    this.Nombre_Completo = this.nombre + ' ' + this.aPaterno+ ' ' + this.aMaterno;

    console.log(this.Nombre_Completo);
    
    
  }

  // getApaterno(): void{
  //   this.numControl =  this.loginEgrService.getTokenDecoded().a_paterno;
  // }

  // getAmaterno(): void{
  //   this.aPaterno =  this.loginEgrService.getTokenDecoded().a_materno;
  // }

  // getNombre(): void{
  //   this.aMaterno =  this.loginEgrService.getTokenDecoded().nombre;
  // }
  
  Salir(): void{
    this.loginEgrService.removeLocalStorage();
    this.router.navigate(['/inicio']);
  }
}
