import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  register: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, 
              private usuarioService: UsuarioService,
              private router: Router,
              private toastr: ToastrService) { 

    this.register = this.fb.group({

      usuarioAdmin: ['', Validators.required],
      passwordAdmin: ['', [Validators.required, Validators.minLength(4)]],
      rep_password: ['' ],
     
  } , {validator: this.checkPassword} 
  
  );

}

ngOnInit(): void {
}

registrarUsuario(): void{
  console.log(this.register);

  const usuario: Usuario ={
    
    NombreUsuario: this.register.value.usuarioAdmin,
    Password: this.register.value.passwordAdmin
  };
  this.loading = true;
  this.usuarioService.seveUser(usuario).subscribe(data =>{
    console.log(data);
    this.toastr.info(data.message);
    this.router.navigate(['/dashboard']);
  },error => {
    this.loading = false;
    console.log(error);
    this.toastr.error(error.error.message, 'Error!')
    this.register.reset;
  });
}



checkPassword(group: FormGroup): any{
  const pass = group.controls.passwordAdmin.value;
  const confirmPass = group.controls.rep_password.value;
  
  return pass === confirmPass ? null : { notSame: true};
 }

 


}


