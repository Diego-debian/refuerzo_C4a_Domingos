import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { ResultadosComponent } from './resultados.component';
import { ListarComponent } from './mesas/listar/listar.component';
import { CrearComponent } from './mesas/crear/crear.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MyHeadComponent } from './my-head/my-head.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ListarpartidoComponent } from './partidos/listarpartido/listarpartido.component';
import { CrearpartidoComponent } from './partidos/crearpartido/crearpartido.component';
import { CrearCandidatoComponent } from './candidatos/crear-candidato/crear-candidato.component';
import { ListarCandidatoComponent } from './candidatos/listar-candidato/listar-candidato.component';

@NgModule({
  declarations: [
    ResultadosComponent,
    ListarComponent,
    CrearComponent,
    MyHeadComponent,
    ListarpartidoComponent,
    CrearpartidoComponent,
    CrearCandidatoComponent,
    ListarCandidatoComponent
  ],
  imports: [
    CommonModule,
    ResultadosRoutingModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule
  ],
  exports:[ResultadosComponent]
})
export class ResultadosModule { }
