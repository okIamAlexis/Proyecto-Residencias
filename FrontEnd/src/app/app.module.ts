import { NgModule } from '@angular/core';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { FormsModule} from '@angular/forms'; 
import { SharedModule } from './shared/shared.module';
import {EgrCuestionariosModule} from './componets/egr-cuestionarios/egr-cuestionarios.module'
import {DashboardModule} from './componets/dashboard/dashboard.module'

//Interceptors
import{ AddTokenInterceptor } from '../app/helpers/add-token.interceptor';
// import { AddTokenEgrInterceptor } from '../app/helpers/add-token-egr.interceptor'


//Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './componets/inicio/inicio.component';
import { LoginComponent } from './componets/inicio/login/login.component';
import { BienvenidaComponent } from './componets/inicio/bienvenida/bienvenida.component';
import { RegisterComponent } from './componets/inicio/register/register.component';

import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { NavbarComponent } from './componets/dashboard/navbar/navbar.component';


import { EgrCuestionariosComponent } from './componets/egr-cuestionarios/egr-cuestionarios.component';
import { NavbarEgrComponent } from './componets/egr-cuestionarios/navbar-egr/navbar-egr.component';

import { PreguntasEmpComponent } from './componets/emp-cuestionarios/preguntas-emp/preguntas-emp.component';
import { EmpCuestionariosComponent } from './componets/emp-cuestionarios/emp-cuestionarios.component';

import { NavbarEmpComponent } from './componets/emp-cuestionarios/navbar-emp/navbar-emp.component';
import { ViewCuesEmpComponent } from './componets/emp-cuestionarios/view-cues-emp/view-cues-emp.component';

import { AddTokenEgrInterceptor } from './helpers/add-token-egr.interceptor';

import { GraficasComponent } from './componets/dashboard/graficas/graficas.component';





@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    BienvenidaComponent,
    RegisterComponent,
    DashboardComponent,

    NavbarComponent,

    // ListCuestionariosComponent,
    EgrCuestionariosComponent,
    NavbarEgrComponent,
    // NombreGrupoComponent,
    // PreguntaComponent,
    // RespuestaCuestionarioComponent,
    EmpCuestionariosComponent,
    PreguntasEmpComponent,

    
    NavbarEmpComponent,
    ViewCuesEmpComponent,

    GraficasComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    SharedModule,
    NgbModule,
    ChartsModule,
    EgrCuestionariosModule,
    DashboardModule,
    NgxChartsModule
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
              {provide: HTTP_INTERCEPTORS, useClass: AddTokenEgrInterceptor, multi: true}
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
