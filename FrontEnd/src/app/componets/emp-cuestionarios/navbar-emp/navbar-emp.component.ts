import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar-emp',
  templateUrl: './navbar-emp.component.html',
  styleUrls: ['./navbar-emp.component.css']
})
export class NavbarEmpComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }
  Salir(): void{
    this.loginService.removeLocalStorage();
    this.router.navigate(['/inicio']);
  }
}
