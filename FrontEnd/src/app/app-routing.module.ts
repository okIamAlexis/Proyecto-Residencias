import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarPasswordComponent } from './componets/dashboard/cambiar-password/cambiar-password.component';

import { CuestionariosComponent } from './componets/dashboard/cuestionarios/cuestionarios.component';

import { NuevoCuestionarioComponent } from './componets/dashboard/cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoDosComponent } from './componets/dashboard/cuestionarios/nuevo-cuestionario/paso-dos/paso-dos.component';
import { PasoUnoComponent } from './componets/dashboard/cuestionarios/nuevo-cuestionario/paso-uno/paso-uno.component';

import { DashboardComponent } from './componets/dashboard/dashboard.component';

import { GraficasComponent } from './componets/dashboard/graficas/graficas.component';


import { NuevoComponent } from './componets/dashboard/nuevo/nuevo.component';
import { EgrCuestionariosComponent } from './componets/egr-cuestionarios/egr-cuestionarios.component';
import { EmpCuestionariosComponent } from './componets/emp-cuestionarios/emp-cuestionarios.component';

import { PreguntasEmpComponent } from './componets/emp-cuestionarios/preguntas-emp/preguntas-emp.component';
import { BienvenidaComponent } from './componets/inicio/bienvenida/bienvenida.component';
import { InicioComponent } from './componets/inicio/inicio.component';
import { LoginComponent } from './componets/inicio/login/login.component';
import { RegisterComponent } from './componets/inicio/register/register.component';
import { NuevoCuestionarioEmpComponent } from './componets/dashboard/cuestionarios/nuevo-cuestionario-emp/nuevo-cuestionario-emp.component';
import { PasoUnoEmpComponent } from './componets/dashboard/cuestionarios/nuevo-cuestionario-emp/paso-uno-emp/paso-uno-emp.component';
import { PasoDosEmpComponent } from './componets/dashboard/cuestionarios/nuevo-cuestionario-emp/paso-dos-emp/paso-dos-emp.component';

import {ViewCuestionaariosEgrComponent} from './componets/egr-cuestionarios/view-cuestionaarios-egr/view-cuestionaarios-egr.component'
import {ViewCuesEmpComponent} from './componets/emp-cuestionarios/view-cues-emp/view-cues-emp.component';

import { CuestionarioComponent} from './componets/dashboard/cuestionarios/cuestionario/cuestionario.component';
import {EgrContCuestionarioComponent} from './componets/egr-cuestionarios/egr-cont-cuestionario/egr-cont-cuestionario.component'
import { EgrCuestionarioComponent } from './componets/egr-cuestionarios/egr-cuestionario/egr-cuestionario.component';

import {CrearCuestionarioComponent} from './componets/dashboard/crear-cuestionario/crear-cuestionario.component';
import { VistaCuesComponent } from './componets/dashboard/crear-cuestionario/vista-cues/vista-cues.component'
import { CuesFinalComponent } from './componets/dashboard/crear-cuestionario/cues-final/cues-final.component';
import { CuestionarioFinalComponent } from './componets/dashboard/crear-cuestionario/cuestionario-final/cuestionario-final.component';
import { EgrRespuestasComponent } from './componets/egr-cuestionarios/egr-respuestas/egr-respuestas.component';
import { EstadisticasComponent } from './componets/dashboard/cuestionarios/estadisticas/estadisticas.component';
import { DetalleRespuestaComponent } from './componets/dashboard/cuestionarios/estadisticas/detalle-respuesta/detalle-respuesta.component';
import { AuthGuard } from './helpers/auth.guard';
import { AuthEgrGuard } from './helpers/auth-egr.guard';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent, children:[
    {path: '', component: BienvenidaComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'login', component:LoginComponent},
  ]},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard], children:[
    {path: '', component: CuestionariosComponent},

    {path: 'crearCuestionario', component: CrearCuestionarioComponent},
    {path: 'vistaCues', component: VistaCuesComponent},
    {path: 'estadisticas/:id', component: EstadisticasComponent},
    {path: 'detalleRespuesta/:id', component: DetalleRespuestaComponent},

    {path: 'cuesFinal', component: CuesFinalComponent},
    {path: 'cuesFinal/:id', component: CuesFinalComponent},
    {path: 'verCuestionarioFinal/:id', component: CuestionarioFinalComponent},

    {path: 'nuevo', component: NuevoComponent},
    {path: 'cambiarPassword', component: CambiarPasswordComponent},

    {path: 'verCuestionarios/:id', component: CuestionarioComponent},

    {path: 'nuevoCuestionario', component: NuevoCuestionarioComponent, children:[
      {path: 'pasoUno', component: PasoUnoComponent},
      {path: 'pasoDos', component: PasoDosComponent}
    ]},
    {path: 'nuevoCuestionarioEMP', component: NuevoCuestionarioEmpComponent, children:[
      {path: 'pasoUnoEmp', component: PasoUnoEmpComponent},
      {path: 'pasoDosEmp', component: PasoDosEmpComponent}
    ]},

    
  ]},

  {path: 'graficas', component: GraficasComponent},
  

  
  {path: 'egr-cuestionarios', component: EgrCuestionariosComponent, canActivate:[AuthEgrGuard],children:[
    {path: 'view-cuestionarios', component: ViewCuestionaariosEgrComponent},
    {path: 'egr-cont-cuestionario', component: EgrContCuestionarioComponent},
    {path: 'egrRespuesta', component: EgrRespuestasComponent},
    {path: '', component: EgrCuestionarioComponent}
    
  ]},

  {path: 'emp-cuestionarios', component: EmpCuestionariosComponent, children:[
    {path: '', component: ViewCuesEmpComponent},
    {path: 'preguntas-emp', component: PreguntasEmpComponent}
  ]},
  {path: '**', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
