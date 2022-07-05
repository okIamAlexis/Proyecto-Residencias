import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import { EgrCuestionariosRoutingModule } from './egr-cuestionarios-routing.module';
import {SharedModule} from '../../shared/shared.module'

//Components

import { ViewCuestionaariosEgrComponent } from './view-cuestionaarios-egr/view-cuestionaarios-egr.component';
import { EgrContCuestionarioComponent } from './egr-cont-cuestionario/egr-cont-cuestionario.component';
import { EgrCuestionarioComponent } from './egr-cuestionario/egr-cuestionario.component';
import { EgrRespuestasComponent } from './egr-respuestas/egr-respuestas.component';


@NgModule({
  declarations: [
    
    ViewCuestionaariosEgrComponent,
    EgrContCuestionarioComponent,
    EgrCuestionarioComponent,
    EgrRespuestasComponent  ],
  imports: [
    CommonModule,
    EgrCuestionariosRoutingModule,
    SharedModule
    
  ]
})
export class EgrCuestionariosModule { }
