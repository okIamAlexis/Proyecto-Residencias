import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import {LoginEgrService} from 'src/app/services/login-egr.service';
import {LoginEmpService} from 'src/app/services/login-emp.service'
import { Usuario, UsuarioEgr, UsuarioEmp } from '../../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  login: FormGroup;
  loginEGR: FormGroup;
  loginEMP: FormGroup;
  
  

  constructor(private fb: FormBuilder, 
              private toastr: ToastrService, 
              private router: Router,
              private loginService: LoginService,
              private loginEgrService: LoginEgrService,
              private loginEmpService: LoginEmpService) {
    this.login = this.fb.group({
      tipousu: [''],
      usuario: ['', Validators.required],
      password: ['', Validators.required]

    });

    this.loginEGR = this.fb.group({

      usuarioEgr: ['', Validators.required],
      passwordEgr: ['', Validators.required]

    });

    this.loginEMP = this.fb.group({

      usuarioEmp: ['', Validators.required],
      passwordEmp: ['', Validators.required]

    });
   }

  ngOnInit(): void {
  }

  //Administrador
  log(): void{
    const usuario: Usuario = {
      NombreUsuario: this.login.value.usuario,
      Password: this.login.value.password
    };

    this.loading = true;
    this.loginService.login(usuario).subscribe(data =>{
      console.log(data);
      this.loading = false;
      this.loginService.setLocalStorage(data.token);
      this.router.navigate(['/dashboard']);
    }, error =>{
      console.log(error);
      this.loading = false;
      this.toastr.error(error.error.message, 'Error');
      this.login.reset();
    })

  }
  
  //Empleador
  logEMP(): void{

    const usuarioEmp: UsuarioEmp = {
      EmpUsuario: this.loginEMP.value.usuarioEmp,
      passwordControl: this.loginEMP.value.passwordEmp
    };

    this.loading = true;
    this.loginEmpService.login(usuarioEmp).subscribe(data =>{
      console.log(data);
      this.loading = false;
      this.loginEmpService.setLocalStorage(data.tokenEmp);
      this.router.navigate(['/egr-cuestionarios']);
    }, error =>{
      console.log(error);
      this.loading = false;
      this.toastr.error(error.error.message, 'Error');
      this.loginEMP.reset();
    })

    // setTimeout(() =>{
    //   if (usuario.nombreUsuario === 'alexis' && usuario.password === 'admin123'){
    //     this.loginEMP.reset();
    //     this.router.navigate(['/emp-cuestionarios']);
    //   }else{
    //     this.toastr.error('Usuario o contraeña incorrecto', 'Error')
    //     this.loginEMP.reset();
    //   }
    //   this.loading = false;
    // }, 3000);

  }

  //Egresado
  logEGR(): void{

    const usuarioEgr: UsuarioEgr = {
      EgrUsuario: this.loginEGR.value.usuarioEgr,
      PasswordControl: this.loginEGR.value.passwordEgr
    };

    this.loading = true;
    this.loginEgrService.login(usuarioEgr).subscribe(data =>{
      console.log(data);
      this.loading = false;
      this.loginEgrService.setLocalStorage(data.tokenEgr);
      this.router.navigate(['/egr-cuestionarios']);
    }, error =>{
      console.log(error);
      this.loading = false;
      this.toastr.error(error.error.message, 'Error');
      this.loginEGR.reset();
    })

  }
}
