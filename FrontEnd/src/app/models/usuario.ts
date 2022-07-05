//Administrador
export class Usuario{
    NombreUsuario?: string;
    Password?: string;
}

// //Egresado
export class UsuarioEgr{
    EgrUsuario?: string;
    PasswordControl?: string;
    nombre?: string;
    egr_apaterno ?: string;
    egr_amaterno?: string;
    egr_correo?: string;
}

// //Empleadores
export class UsuarioEmp{
    EmpUsuario?: string;
    passwordControl?: string;
    nombre?: string;
    emp_apaterno?: string;
    emp_amaterno?: string;
    emp_correo?: string;
}