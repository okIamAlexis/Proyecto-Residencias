import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioEgr } from 'src/app/models/usuario';
import { UsuarioEmp } from 'src/app/models/usuario';
import { UsuarioEgrService } from 'src/app/services/usuario-egr.service';
import { UsuarioEmpService } from 'src/app/services/usuario-emp.service'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registroEGR: FormGroup;
  registroEMP: FormGroup;
  loading = false;
  

  constructor(private fb: FormBuilder, 
              private usuarioEmpService: UsuarioEmpService,
              private usuarioEgrService: UsuarioEgrService,
              private router: Router,
              private toastr: ToastrService) { 

    this.registroEMP = this.fb.group({

      rfc: ['', Validators.required],
      rep_rfc: ['', ],
      nombre: ['', Validators.required],
      a_paterno: ['', Validators.required],
      a_materno: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]]

    },{ validators:this.checkRFC}
    );


    this.registroEGR = this.fb.group({

      tipousu: ['', Validators.required],
      
      num_Control: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      rep_num_Control: ['' ],
      nombre: ['', Validators.required],
      a_paterno: ['', Validators.required],
      a_materno: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],


      // usuario: ['', Validators.required],
      

  },{validator: this.checkPassword} 
  
  );

}

ngOnInit(): void {
}

//Registro Egresados
registrarEgresado(): void{
  console.log(this.registroEGR);

  const usuarioEgr: UsuarioEgr ={

    EgrUsuario: this.registroEGR.value.num_Control,
    PasswordControl: "@" + this.registroEGR.value.rep_num_Control,
    nombre: this.registroEGR.value.nombre,
    egr_apaterno : this.registroEGR.value.a_paterno,
    egr_amaterno: this.registroEGR.value.a_materno,
    egr_correo: this.registroEGR.value.correo,
    };
    this.loading = true;
    this.usuarioEgrService.seveUser(usuarioEgr).subscribe(data =>{
    console.log(data);
    this.toastr.success('El usuario ' + usuarioEgr.EgrUsuario + ' fue registrado con exito!', 'Usuario Registrado!')
    this.router.navigate(['/inicio/login']);
    this.loading= false;
    },error => {
    this.loading = false;
    console.log(error);
    this.toastr.error(error.error.message, 'Error!')
    this.registroEGR.reset;
    });
}

//Refistro Empleadores
registrarEmpleador(): void{
  console.log(this.registroEMP);

  const usuarioEmp: UsuarioEmp ={

    EmpUsuario: this.registroEMP.value.rfc,
    passwordControl: "@" + this.registroEMP.value.rep_rfc,
    nombre: this.registroEMP.value.nombre,
    emp_apaterno : this.registroEMP.value.a_paterno,
    emp_amaterno: this.registroEMP.value.a_materno,
    emp_correo: this.registroEMP.value.correo,
    };
    this.loading = true;
    this.usuarioEmpService.seveUser(usuarioEmp).subscribe(data =>{
    console.log(data);
    this.toastr.success('El usuario ' + usuarioEmp.EmpUsuario + ' fue registrado con exito!', 'Usuario Registrado!')
    this.router.navigate(['/inicio/login']);
    this.loading= false;
    },error => {
    this.loading = false;
    console.log(error);
    this.toastr.error(error.error.message, 'Error!')
    this.registroEMP.reset;
    });
  
}

checkPassword(group: FormGroup): any{
  const pass = group.controls.num_Control.value;
  const confirmPass = group.controls.rep_num_Control.value;
  
  return pass === confirmPass ? null : { notSame: true};
 }

 checkRFC (group: FormGroup): any{
   const passrfc = group.controls.rfc.value;
   const confirmrfc = group.controls.rep_rfc.value;

   return passrfc === confirmrfc ? null : { notSame: true };
 }


}
