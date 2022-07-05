import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import { DashboardRoutingModule } from './dashboard-routing.module';
import{ SharedModule } from '../../shared/shared.module'

//Componets
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { CuestionariosComponent } from './cuestionarios/cuestionarios.component';
// import { GraficasComponent } from './graficas/graficas.component';
import { NuevoCuestionarioComponent } from './cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoUnoComponent } from './cuestionarios/nuevo-cuestionario/paso-uno/paso-uno.component';
import { PasoDosComponent } from './cuestionarios/nuevo-cuestionario/paso-dos/paso-dos.component';
import { NuevaPreguntaComponent } from './cuestionarios/nuevo-cuestionario/paso-dos/nueva-pregunta/nueva-pregunta.component';
import { NuevoComponent } from './nuevo/nuevo.component';

import { NuevoCuestionarioEmpComponent } from './cuestionarios/nuevo-cuestionario-emp/nuevo-cuestionario-emp.component';
import { PasoUnoEmpComponent } from './cuestionarios/nuevo-cuestionario-emp/paso-uno-emp/paso-uno-emp.component';
import { PasoDosEmpComponent } from './cuestionarios/nuevo-cuestionario-emp/paso-dos-emp/paso-dos-emp.component';
import { NuevaPreguntaEmpComponent } from './cuestionarios/nuevo-cuestionario-emp/paso-dos-emp/nueva-pregunta-emp/nueva-pregunta-emp.component';

import { CuestionarioComponent } from './cuestionarios/cuestionario/cuestionario.component';

import { CrearCuestionarioComponent } from './crear-cuestionario/crear-cuestionario.component';
import { VistaCuesComponent } from './crear-cuestionario/vista-cues/vista-cues.component';

import { CuesFinalComponent } from './crear-cuestionario/cues-final/cues-final.component';
import { CuestionarioFinalComponent } from './crear-cuestionario/cuestionario-final/cuestionario-final.component';

import { EstadisticasComponent } from './cuestionarios/estadisticas/estadisticas.component';
import { DetalleRespuestaComponent } from './cuestionarios/estadisticas/detalle-respuesta/detalle-respuesta.component';



@NgModule({
  declarations: [
    CambiarPasswordComponent,
    CuestionariosComponent,
    // GraficasComponent,
    NuevoCuestionarioComponent,
    PasoUnoComponent,
    PasoDosComponent,
    NuevaPreguntaComponent,
    NuevoComponent,
    NuevoCuestionarioEmpComponent,
    PasoUnoEmpComponent,
    PasoDosEmpComponent,
    NuevaPreguntaEmpComponent,
    CuestionarioComponent,
    CrearCuestionarioComponent,
    VistaCuesComponent,
    CuesFinalComponent,
    CuestionarioFinalComponent,
    EstadisticasComponent,
    DetalleRespuestaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
